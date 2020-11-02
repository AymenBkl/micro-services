const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.searchProduct = (req,res) =>{
    console.log(req.body.products);
    product.find({
        $or : req.body.products
    })
    .populate({path : 'categorys'})
        .then(products => {
            if (products && products.length != 0){
                filterProducts(products);
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

function filterProducts(products){
    let categoriesId = {};
    products.forEach(product => {
        if (categoriesId[product.category]){
        }
        else {
            categoriesId[product.category] = [];
        }
        categoriesId[product.category].push(product);
    });

    console.log(categoriesId);
    
}