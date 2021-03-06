const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');

const address = require('../Models/address');

const paymentDetail = require('../Models/paymentDetail');

module.exports.updateUser = (res,id,query) =>{
    user.findByIdAndUpdate(id,query,{new : true})
    .populate({path: 'addresses'})
    .populate({path:'paymentDetail'})
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