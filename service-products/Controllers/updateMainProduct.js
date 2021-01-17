const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.updateMainProduct = (res,id,query) =>{
    console.log(id);

    mainProduct.findByIdAndUpdate(id,query,{new : true})
        .then(product => {
            if (product){
                response.response("success",res,"Main PRODUCT UPDATED",200,product);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}