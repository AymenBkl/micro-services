const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');


module.exports.searchPharmacy = (req,res) =>{
    console.log(req.body.categories);
    user.find({
        $or : req.body.categories
    })
        .then(users => {
            if (users && users.length != 0){
                filterProducts(users,req)
                    .then(pharmaciesId => {
                        if (pharmaciesId){
                            response.response("success",res,"Pharmacies Found",200,pharmaciesId);
                        }
                        else {
                            console.log('err');
                        }
                    } );
                
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
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => {return {_id : key}});
                resolve(pharmaciesId)
            });
        
    });

    
}

function getAllPharmaciesId(products) {
    return new Promise((resolve,reject) => {
        let pharmaciesId = {};
        console.log(products.length);
        products.forEach(product => {
            if (pharmaciesId[product.category]){
            }
            else {
                pharmaciesId[product.category] = [];
            }
            pharmaciesId[product.category].push(product);
        });
        resolve(pharmaciesId);
    });
}