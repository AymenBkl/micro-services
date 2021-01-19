const user = require('../Models/category');

const response = require('../Handler/HandlerPrescription/response.controller');

module.exports.getUser = (res,id,query) =>{
    
    user.findById(id)
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