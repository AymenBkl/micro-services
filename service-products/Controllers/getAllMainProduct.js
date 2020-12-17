const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.getAll = (res) =>{
    mainProduct.find()
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