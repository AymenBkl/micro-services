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
    .get('/',orderController.getAllOrders);

module.exports = router;