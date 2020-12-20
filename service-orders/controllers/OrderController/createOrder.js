
const referal = require("../../models/referal");
const order = require("../../models/order");
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');

module.exports = {
    createOrder: (req, res, next) => {
        req.body.patient = req.query.id;
        console.log(req.body);
        order.create(req.body)
            .then((ref) => {
                if (ref) {
                    response.response("success",res,"Order created ",200,ref);
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