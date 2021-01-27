
const referal = require("../../models/referal");
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');
const paymentDetail = require('../../models/paymentDetail');

module.exports = {
    createReferal: (req, res, next) => {
        req.body.owner = req.query.id;
        console.log(req.body);
        referal.create(req.body)
            .then((ref) => {
                if (ref) {
                    response.response("success",res,"Referal created ",200,ref);
                }
                else {
                    response.response("error",res,"undefined",404,null);
                }
            })
            .catch(err => {
                response.response("error",res,err,500,null);
            })
        
    }
}