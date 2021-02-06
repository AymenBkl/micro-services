
const referal = require("../../models/referal");
const order = require("../../models/order");
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');
const address = require('../../models/address');
const refundModel = require('../../models/refund');
const updateOrder = require('./updateOrder');
const paymentDetail = require('../../models/paymentDetail');

module.exports = {
    createRefund(req, res, next) {
       req.body.patient = req.query.id;
        let refund = {
            order: req.body.orderId,
            patient: req.body.patient,
            pharmacy: req.body.pharmacyId,
            refundPrice:req.body.refundPrice,
        }
        refundModel.create(refund)
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
                console.log(err);
                response.response("error", res, err, 500, null);
            })
            
    }
}

