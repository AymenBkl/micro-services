const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.updateCategory = (res,id,query) =>{
    category.findByIdAndUpdate(id,query,{new : true})
        .then(category => {
            if (category){
                response.response("success",res,"USER FOUND",200,category);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}