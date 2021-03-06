
const referal = require('../../models/referal');
const order = require('../../models/order');
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');
const product = require('../../models/product');
const mainProduct = require('../../models/main-product');
const address = require('../../models/address');
const paymentDetail = require('../../models/paymentDetail');
const refund = require('../../models/refund');

module.exports = {
    getOrders: (req, res, query) => {
        order.find(query)
        .populate([
            { path: 'patient',populate:{path:'paymentDetail'}, select: "-salt -hash"},
            { path: 'address'},
            { path: 'pharmacy',populate:{path:'paymentDetail'},select: "-salt -hash" },
            { path: 'referal',populate:{path:'referal',populate:{path:'owner',populate: { path: 'paymentDetail' }},select: "-orders  -commision" }},
            { path: 'refund',populate:{path:'refund'}, select: "-order -patient" },
            { path: 'products',populate:{path:'product',populate:{path:'mainProduct'}}}
        ])
        .sort('-createdAt')
        .then((ref) => {
                if (ref) {
                    console.log(ref);
                    response.response("success",res,"Messages",200,ref);
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