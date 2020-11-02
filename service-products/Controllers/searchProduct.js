const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

const request = require('../Request/requestCategories').request;

module.exports.searchProduct = (req,res) =>{
    console.log(req.body.products);
    product.find({
        $or : req.body.products
    })
    .populate({path : 'categorys'})
        .then(products => {
            if (products && products.length != 0){
                filterProducts(products,req);
                response.response("success",res,"Products Found",200,products);
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
                            result.category.forEach(categorie => {
                                categorie['products'] = JSON.stringify(categoriesId[categorie._id]);
                            });
                            console.log("xyz",result.category);
                        }
                        else {
                            console.log('err')
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        
    });

    
}

function getAllCategoriesId(products) {
    return new Promise((resolve,reject) => {
        let categoriesId = {};
        console.log(products.length);
        products.forEach(product => {
            if (categoriesId[product.category]){
            }
            else {
                categoriesId[product.category] = [];
            }
            categoriesId[product.category].push(product);
        });
        resolve(categoriesId);
    });
}