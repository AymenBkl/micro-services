const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

const request = require('../Request/requestPharmacies').request;
module.exports.searchCategory = (req,res) =>{
    console.log("categories",req.body.categoriesId);
    category.find({
        $or : req.body.categoriesId
    })
        .then(categories => {
            if (categories && categories.length != 0){
                filterCategories(categories,req)
                    .then(categories => {
                        if (categories){
                            response.response("success",res,"Categories Found",200,categories);
                        }
                        else {
                            response.response("error",res,"undefined",404,null);
                        }
                    }).catch(err => {
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

function filterCategories(categories,req){
    return new Promise((resolve,reject) => {
        getAllPharmaciesId(categories)
            .then(pharmaciesId => {
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => {return {_id : key}});
                request(req)
                    .then(result => {
                        if (result && result.status == 200){
                            Object.keys(result.user).map(pharmacie => {
                                result.user[pharmacie].categories =  JSON.stringify(pharmaciesId[pharmacie])
                            })
                            resolve(result.user);
                        }
                        else {
                            reject();
                        }
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        
    });

    
}

function getAllPharmaciesId(categories) {
    return new Promise((resolve,reject) => {
        let pharmaciesId = {};
        console.log(categories.length);
        categories.forEach(categorie => {
            console.log("xyz",categorie._id)
            if (pharmaciesId[categorie.pharmacy]){
            }
            else {
                pharmaciesId[categorie.pharmacy] = {};
            }
            pharmaciesId[categorie.pharmacy][categorie._id] = categorie;
        });
        console.log(pharmaciesId);
        resolve(pharmaciesId);
    });
}