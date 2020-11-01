const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.getAll = (res,pharmacyId) =>{
    category.find({
        pharmacy : pharmacyId
    })
        .then(categories => {
            if (categories){
                response.response("success",res,"CATEGORY CREATED",200,categories);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}