const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');


module.exports.searchPharmacy = (req,res) =>{
    console.log(req.body.pharmaciesId);
    user.find({
        $or : req.body.pharmaciesId
    })
    .select("-salt -hash")
        .then(users => {
            if (users && users.length != 0){
                filterPharmacies(users,req)
                    .then(pharmaciesId => {
                        if (pharmaciesId){
                            response.response("success",res,"Pharmacies Found",200,pharmaciesId);
                        }
                        else {
                            response.response("error",res,"undefined",404,null);
                        }
                    } ).catch(err => {
                        response.response("error",res,err,500,null);
                    });
                
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}

function filterPharmacies(products,req){
    return new Promise((resolve,reject) => {
        getAllPharmaciesId(products)
            .then(pharmaciesId => {
                if (pharmaciesId){
                    req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => {return {_id : key}});
                    resolve(pharmaciesId)
                }
                else {
                    reject();
                }
                
            }).catch(err => {
                reject(err);
            });
        
    });

    
}

function getAllPharmaciesId(pharmacies) {
    return new Promise((resolve,reject) => {
        let pharmaciesId = {};
        console.log(pharmacies.length);
        pharmacies.forEach(pharmacy => {
            pharmaciesId[pharmacy._id] = pharmacy;
        });
        console.log(pharmaciesId)
        resolve(pharmaciesId);
    });
}