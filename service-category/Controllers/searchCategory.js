const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

const request = require('../Request/requestPharmacies').request;
module.exports.searchCategory = (req, res) => {
    return new Promise((resolve, reject) => {
        console.log("categories", req.body.categoriesId);
    category.find({
        $or: req.body.categoriesId
    })
        .then(categories => {
            if (categories && categories.length != 0) {
                filterCategories(categories, req)
                    .then(categories => {
                        if (categories) {
                            resolve({type:"success",res : res,msg : "Categories Found",status : 200,category : categories});
                        }
                        else {
                            resolve({type:"error",res : res,msg : "undefined",status: 404,category  : null});
                        }
                    }).catch(err => {
                        reject({type:"error",res : res,msg : err,status: 500,category  : null});
                    });

            }
            else {
                resolve({type:"error",res : res,msg : "undefined",status: 404,category  : null});
            }
        })
        .catch(err => {
            reject({type:"error",res : res,msg : err,status: 500,category  : null});
        })
    })
}

function filterCategories(categories, req) {
    return new Promise((resolve, reject) => {
        getAllPharmaciesId(categories)
            .then(pharmaciesId => {
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => { return { _id: key } });
                request(req)
                    .then(result => {
                        if (result && result.status == 200) {
                            console.log(result.user);
                            Object.keys(result.user).map(pharmacie => {
                                console.log(pharmacie, result.user[pharmacie]);
                                result.user[pharmacie].pharmacy.categories = 
                                    JSON.stringify(Object.values(pharmaciesId[result.user[pharmacie].pharmacy_id])
                                    .map(category => {
                                        return {category : category};
                                    }))
                                
                            })
                            console.log(result.user);
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
    return new Promise((resolve, reject) => {
        let pharmaciesId = {};
        console.log(categories.length);
        categories.forEach(categorie => {
            console.log("xyz", categorie._id)
            if (pharmaciesId[categorie.pharmacy]) {
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