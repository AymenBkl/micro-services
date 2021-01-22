const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');

const address = require('../Models/address');

module.exports.getUser = (res,id,query) =>{
    
    user.findById(id)
        .populate({path: 'addresses'})
        .select("-salt -hash")
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