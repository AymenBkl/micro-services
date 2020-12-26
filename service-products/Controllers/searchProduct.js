const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');

const request = require('../Request/requestUser').request;

module.exports.searchProduct = (req, res) => {
    product.find()
        .populate({
            path: 'mainProduct', match: {
                $and: req.body.products
            }
        })
        .then(products => {
            if (products && products.length != 0) {
                sendReqToPharmacies(products, req)
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


function sendReqToPharmacies(products, req) {
    return new Promise((resolve, reject) => {
        getAllPharmaciesId(products)
            .then(pharmaciesId => {
                console.log("here1",pharmaciesId)
                if (pharmaciesId != null && Object.keys(pharmaciesId).length != 0){
                    console.log("here2",pharmaciesId)
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => { return { _id: key } });
                request(req)
                    .then(result => {
                        if (result && result.status == 200) {
                            Object.keys(result.user).map(pharmacie => {
                                result.user[pharmacie].pharmacy.products =
                                    Object.values(pharmaciesId[result.user[pharmacie].pharmacy_id])
                        

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
