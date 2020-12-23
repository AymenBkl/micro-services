const referal = require('../../models/referal');

const response = require('../../Handler/OrderHandler/response.controller');

module.exports.updateReferal = (res,referalId,query) =>{
    referal.findByIdAndUpdate(referalId,query,{new : true})
        .then(referal => {
            if (referal){
                response.response("success",res,"USER FOUND",200,referal);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}