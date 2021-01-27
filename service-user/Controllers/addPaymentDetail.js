
const paymentDetail = require('../Models/paymentDetail');

const updateUser = require('./updateUser');

const response = require('../Handler/HandlerUser/response.controller');

module.exports.addPaymentDetail = (res,userId,paymentDetailBody) => {
    paymentDetailBody.user = userId;
    paymentDetail.create(paymentDetailBody)
        .then(paymentDetail => {
            console.log(paymentDetail);
            if (paymentDetail){
                const query = {
                    $set: { paymentDetail: paymentDetail } ,
               }
               updateUser.updateUser(res,userId,query);
            }
            else {
                response.response("error",res,"undefined",404,null);

            }
        })
        .catch(err => {
            response.response("error",res,"undefined",404,null);

        })
}