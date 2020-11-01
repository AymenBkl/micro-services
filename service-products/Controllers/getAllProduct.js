const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.getAll = (res,categoryId) =>{
    product.find({
        category : categoryId
    })
        .then(products => {
            if (products && products.length != 0){
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