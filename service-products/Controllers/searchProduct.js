const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');

const request = require('../Request/requestUser').request;

module.exports.searchProduct = (req, res) => {
    console.log(req.body.products);
    addRegex(req.body.products);
    product.find()
        .populate({
            path: 'mainProduct', match: {
                $or: req.body.products
            }
        })
        .then(products => {
            console.log(products);
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
                req.body.pharmaciesId = Object.keys(pharmaciesId).map(key => { return { _id: key } });
                request(req)
                    .then(result => {
                        if (result && result.status == 200) {
                            console.log(result.user);
                            Object.keys(result.user).map(pharmacie => {
                                console.log(pharmacie, result.user[pharmacie]);
                                result.user[pharmacie].pharmacy.products =
                                    JSON.stringify(Object.values(pharmaciesId[result.user[pharmacie].pharmacy_id])
                                        .map(product => {
                                            return { product: product };
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

function getAllPharmaciesId(products) {
    return new Promise((resolve, reject) => {
        let pharmaciesId = {};
        console.log(products.length);
        products.forEach(product => {
            if (product.mainProduct != null) {

                if (pharmaciesId[product.pharmacy]) {
                }
                else {
                    pharmaciesId[product.pharmacy] = {};
                }
                pharmaciesId[product.pharmacy][product._id] = product;
            }
        });
        console.log(pharmaciesId);
        resolve(pharmaciesId);
    });
}


function addRegex(products) {
    products.map(product => {
        product.name = new RegExp(product.name);
    })
}