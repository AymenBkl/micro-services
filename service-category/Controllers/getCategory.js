const category = require('../Models/category');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.getCategory = (res,categoryId) =>{
    category.findById(categoryId)
    .populate({path:'products'})
        .then(category => {
            console.log(category);
            if (category){
                response.response("success",res,"CATEGORY CREATED",200,category);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            console.log(err);
            response.response("error",res,err,500,null);
        })
}