const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.updateProduct = (res,id,query) =>{
    console.log(id);

    product.findByIdAndUpdate(id,query,{new : true})
        .then(product => {
            if (product){
                response.response("success",res,"PRODUCT UPDATED",200,product);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}