const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');

const request = require('../Request/requestUser').request;

module.exports.searchProduct = (req, res) => {
    product.find()
        .populate({
            path: 'mainProduct', match: {
                name : {$in : req.body.products}
            }
        })

        .then(products => {
            console.log('found',products);
            if (products && products.length != 0) {
                sendReqToPharmacies(products, req,req.body.products.length)
                    .then(productss => {
                        if (productss && productss.length != 0) {
                            response.response("success", res, "Products Found", 200, productss);
                        }
                        else {
                            response.response("error", res, "undefined", 404, null);
                        }

                    }).catch(err => {
                        response.response("error", res, err, 500, null);
                    });
            }
            else {
                response.response("error", res, "undefined", 404, null);
            }
        })
        .catch(err => {
            response.response("error", res, err, 500, null);
        })


}


function sendReqToPharmacies(products, req,len) {
    return new Promise((resolve, reject) => {
        getAllPharmaciesId(products)
            .then(pharmaciesId => {
                if (pharmaciesId != null && Object.keys(pharmaciesId).length != 0){
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => { return { _id: key } });
                request(req)
                    .then(result => {
                        if (result && result.status == 200) {
                            Object.keys(result.user).map(pharmacie => {
                                let products = Object.values(pharmaciesId[result.user[pharmacie].pharmacy_id])
                                if (products.length == len){
                                    result.user[pharmacie].pharmacy.products = products
                                }
                                else {
                                    delete result.user[pharmacie];
                                }
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
                }
                else {
                    resolve(false);
                }
            });
        
    });
}

function getAllPharmaciesId(products) {
    return new Promise((resolve, reject) => {
        let pharmaciesId = {};
        products.forEach(product => {
            if (product.mainProduct != null) {
                console.log(product);

                if (pharmaciesId[product.pharmacy]) {
                }
                else {
                    pharmaciesId[product.pharmacy] = {};
                }
                pharmaciesId[product.pharmacy][product._id] = {product: product,quantity: NaN};
            }
        });
        resolve(pharmaciesId);
    });
}
