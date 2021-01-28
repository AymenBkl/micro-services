const commision = require('../../models/commision');

const response = require('../../Handler/OrderHandler/response.controller');

module.exports = {
    getCommission: (res) => {
        commision.find({})
        .then((commision) => {
                if (commision) {
                    response.response("success",res,"Commissions ",200,commision);
                }
                else {
                    response.response("error",res,"undefined",404,null);
                }
            })
            .catch(err => {
                console.log(err);
                response.response("error",res,err,500,null);
            })
        
    }
}