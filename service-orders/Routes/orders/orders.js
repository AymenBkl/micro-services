const express = require('express');


var router = express.Router();

const orderController = require('../../controllers/OrderController/order.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post('/',orderController.createORder)
    .post('/createrefund',orderController.createRefund)
    .get('/',orderController.getAllOrder)
    .get('/allorders',orderController.getAllOrders)
    .get('/allrefunds',orderController.getAllRefunds)
    .get('/allrefundsadmin',orderController.getAllRefundsAdmin)
    .put('/',orderController.updateOrderStatus)
    .put('/paypharmacy',orderController.payPharmacy)
    .put('/payreferal',orderController.payReferal)


module.exports = router;