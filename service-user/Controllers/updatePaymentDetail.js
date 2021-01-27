const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');

const address = require('../Models/address');

const paymentDetail = require('../Models/paymentDetail');

module.exports.updatePaymentDetail = (res,id,query) =>{
    console.log(id);
    paymentDetail.findByIdAndUpdate(id,query,{new : true})
        .then(paymentDetail => {
            if (paymentDetail){
                response.response("success",res,"USER FOUND",200,paymentDetail);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}