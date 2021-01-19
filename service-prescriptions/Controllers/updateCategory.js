const category = require('../Models/category');

const response = require('../Handler/HandlerPrescription/response.controller');

module.exports.updateCategory = (res,id,query,options) =>{
    console.log(id);

    category.findByIdAndUpdate(id,query,options)
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