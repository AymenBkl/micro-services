const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.addCategory = (res,body) =>{
    console.log(body);
    category.create(body)
        .then(category => {
            if (category){
                response.response("success",res,"CATEGORY CREATED",200,category);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}