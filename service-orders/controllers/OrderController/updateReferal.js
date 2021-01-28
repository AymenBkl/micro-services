const referal = require('../../models/referal');

const response = require('../../Handler/OrderHandler/response.controller');

const paymentDetail = require('../../models/paymentDetail');

module.exports.updateReferal = (res,referalId,query) =>{
    referal.findByIdAndUpdate(referalId,query,{upsert : true})
        .then(referal => {
            if (referal){
                response.response("success",res,"USER FOUND",200,referal);
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