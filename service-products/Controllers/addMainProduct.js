const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.addProduct = (res,body) =>{
    console.log(body);
    mainProduct.create(body)
        .then(product => {
            if (product){
                response.response("success",res,"Main Product CREATED",200,product);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}