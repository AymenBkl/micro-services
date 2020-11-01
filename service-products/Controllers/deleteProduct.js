const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.deleteProduct = (res,id) =>{
    console.log(id);
    product.findByIdAndDelete(id)
        .then(result => {
            if (result){
                response.response("success",res,"PRODUCT DELETED",200,null);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}