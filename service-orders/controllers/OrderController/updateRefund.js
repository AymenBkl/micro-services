
const referal = require("../../models/referal");
const order = require("../../models/order");
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');
const address = require('../../models/address');
const refundModel = require('../../models/refund');
const updateOrder = require('./updateOrder');
const paymentDetail = require('../../models/paymentDetail');

module.exports = {
    updateRefund(req, res, next) {
       console.log(req.body.refundId);
        refundModel.findByIdAndUpdate(req.body.refundId,{$set: {refundPrice:req.body.refundPrice}})
            .then((refund) => {
                if (refund){
                    const query = {
                        refund: {refund : refund._id},
                        products: req.body.products
                    }
                    updateOrder.updateOrder(res,req.body.orderId,query);
                }
                else {
                    response.response("error", res, "undefined", 404, null);
                }

            })
            .catch(err => {
                response.response("error", res, err, 500, null);
            })
            
    }
}

