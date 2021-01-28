
const response = require('../../Handler/OrderHandler/response.controller');


const commision = require('../../models/commision');

module.exports.updateCommission = (res,commissionId,query) =>{
    console.log(commissionId)
    commision.findByIdAndUpdate(commissionId,query,{new : true})
        .then(commission => {
            if (commission){
                response.response("success",res,"COMMISSION UPDATED",200,commission);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}