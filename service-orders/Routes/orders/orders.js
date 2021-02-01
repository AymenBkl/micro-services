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

    .get('/getcommission',orderController.getCommissions)

    .get('/allrefundsadmin',orderController.getAllRefundsAdmin)

    .put('/',orderController.updateOrderStatus)

    .put('/paypharmacy',orderController.payPharmacy)

    .put('/updatecommission',orderController.updateCommission)

    .put('/payreferal',orderController.payReferal)

    .put('/payrerefund',orderController.payRefund)

    .put('/updaterefund',orderController.updateRefund)



module.exports = router;