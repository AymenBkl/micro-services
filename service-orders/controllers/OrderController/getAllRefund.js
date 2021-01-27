
const referal = require('../../models/referal');
const order = require('../../models/order');
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');
const product = require('../../models/product');
const mainProduct = require('../../models/main-product');
const address = require('../../models/address');
const refund = require('../../models/refund');
const paymentDetail = require('../../models/paymentDetail');

module.exports = {
    getRefunds: (req, res, query) => {
        refund.find(query)
            .populate([
                { path: 'patient', select: "-salt -hash" },
                {
                    path: 'order', populate: [
                        { path: 'patient', select: "-salt -hash" },
                        { path: 'address' },
                        { path: 'pharmacy', select: "-salt -hash" },
                        { path: 'referal', select: "-orders -owner -commision" },
                        { path: 'referal',populate:{path:'referal',select: "-orders -owner -commision" }},
                        { path: 'products', populate: { path: 'product', populate: { path: 'mainProduct' } } }
                    ]
                }
            ])
            .sort('-createdAt')
            .then((refunds) => {
                if (refunds) {
                    response.response("success", res, "REFUNDS", 200, refunds);
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