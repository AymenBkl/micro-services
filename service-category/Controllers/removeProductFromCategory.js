const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.removeCategory = (res,categoryId,productId) =>{
    console.log(categoryId,productId);
    /**category.findByIdAndDelete(id)
        .then(result => {
            if (result){
                response.response("success",res,"CATEGORY DELETED",200,null);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })**/
}