const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.addProduct = (res,body) =>{
    console.log(body);
    product.create(body)
        .then(product => {
            if (product){
                response.response("success",res,"Product CREATED",200,product);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}