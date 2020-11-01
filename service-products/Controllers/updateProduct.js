const category = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.updateCategory = (res,id,query) =>{
    console.log(id);

    category.findByIdAndUpdate(id,query,{new : true})
        .then(category => {
            if (category){
                response.response("success",res,"CATEGORY UPDATED",200,category);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}