const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');

const request = require('../Request/requestCategories').request;

module.exports.searchProduct = (req, res) => {
    console.log(req.body.products);
    product.find({
        $or: req.body.products
    })
        .then(products => {
            if (products && products.length != 0) {
                filterProducts(products, req)
                    .then(products => {
                        if (products && products.length != 0) {
                            response.response("success", res, "Products Found", 200, products);
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

function filterProducts(products, req) {
    let size = req.body.products.length;
    return new Promise((resolve, reject) => {
        validCategories(products, size)
            .then(categoriesId => {
                if (categoriesId && Object.keys(categoriesId).length != 0){
                req.body.categoriesId = Object.keys(categoriesId).map(key => { return { _id: key } });
                request(req)
                    .then(result => {
                        if (result && result.status == 200) {
                            console.log("lol",result.category)
                            result.category.forEach(categorie => {
                                let categories = JSON.parse(categorie.pharmacy.categories);
                                console.log(categories);
                                categories.map(categorie => {
                                    Object.keys(categoriesId).map(
                                        categorieId => {
                                            console.log(categorie);
                                            if (categorie.category._id == categorieId) {
                                                categorie.category.products = ({product : Object.values(categoriesId[categorieId])});
                                            }
                                        })
                                })
                                categorie.pharmacy.categories = JSON.parse(JSON.stringify(categories));
                            })
                            resolve(result.category);
                        }
                        else {
                            reject();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
                } else {
                    resolve(false);
                }
            });

    });


}

function getAllCategoriesId(products) {
    return new Promise((resolve, reject) => {
        let categoriesId = {};
        products.forEach(product => {
            if (categoriesId[product.category]) {
            }
            else {
                categoriesId[product.category] = {};
            }
            categoriesId[product.category][product._id] = product;
        });
        resolve(categoriesId);
    });
}

function validCategories(products, size) {
    return new Promise((resolve, reject) => {

    getAllCategoriesId(products)
        .then((categoriesId) => {
            Object.keys(categoriesId)
                .map(category => {
                    if (Object.keys(categoriesId[category]).length !== size){
                        delete categoriesId[category];
                    }
                })
            resolve(categoriesId);
        });
    });
}