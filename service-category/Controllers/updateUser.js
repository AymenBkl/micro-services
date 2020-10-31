const user = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.updateUser = (res,id,query) =>{
    user.findByIdAndUpdate(id,query,{new : true})
        .then(user => {
            if (user){
                response.response("success",res,"USER FOUND",200,user);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}