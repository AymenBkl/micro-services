const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.deleteMainProduct = (res,id) =>{
    console.log(id);
    mainProduct.findByIdAndDelete(id)
        .then(result => {
            if (result){
                response.response("success",res,"MAIN PRODUCT DELETED",200,null);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}