
const referal = require("../../models/referal");
const order = require("../../models/order");
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');

module.exports = {
    async createOrder(req, res, next) {
        req.body.patient = req.query.id;
        let createOrder = await order.create(req.body)
        createOrder.populate([
            { path: 'patient', select: "-salt -hash" },
            { path: 'pharmacy', select: "-salt -hash" },
            { path: 'referal', select: "-owner -orders -commision" }])
            .execPopulate()
            .then((order) => {
                if (order) {
                    updateReferal(order, req);
                    response.response("success", res, "Order created ", 200, order);
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

function updateReferal(order, req) {
    if (req.body.referal != null) {
        referal.update(
            { _id: req.body.referal._id },
            { $push: { orders: order } }
        )
            .then(ref => {
                console.log(ref);
            })
            .catch(err => {
                console.log(err);
            })
    }
}