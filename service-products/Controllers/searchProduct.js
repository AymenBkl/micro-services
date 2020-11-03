const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');

const request = require('../Request/requestCategories').request;

module.exports.searchProduct = (req,res) =>{
    console.log(req.body.products);
    product.find({
        $or : req.body.products
    })
        .then(products => {
            if (products && products.length != 0){
                filterProducts(products,req)
                    .then(products =>{ 
                        if (products && products.length != 0){
                            response.response("success",res,"Products Found",200,products);
                        }
                        else {
                            response.response("error",res,"undefined",404,null);
                        }
                        
                    }).catch(err => {
                        response.response("error",res,err,500,null);
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

function filterProducts(products,req){
    return new Promise((resolve,reject) => {
        getAllCategoriesId(products)
            .then(categoriesId => {
                req.body.categoriesId = Object.keys(categoriesId).map(key => {return {_id : key}});
                request(req)
                    .then(result => {
                        if (result && result.status == 200){
                            Object.keys(result.category).forEach(categorie => {
                                let categories = JSON.parse(result.category[categorie].categories);
                                Object.keys(categories).map(categorie => {
                                    Object.keys(categoriesId).map(
                                        categorieId => {
                                            if (categorie == categorieId){
                                                categories[categorie].products = (categoriesId[categorieId]);
                                            }
                                        })         
                                } )
                                result.category[categorie].categories = JSON.parse(JSON.stringify(categories));
                            })
                            resolve(result.category);
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

function getAllCategoriesId(products) {
    return new Promise((resolve,reject) => {
        let categoriesId = {};
        products.forEach(product => {
            if (categoriesId[product.category]){
            }
            else {
                categoriesId[product.category] = {};
            }
            categoriesId[product.category][product._id] = product;
        });
        console.log(categoriesId);
        resolve(categoriesId); 
    });
}