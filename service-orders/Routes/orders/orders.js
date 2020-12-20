const express = require('express');


var router = express.Router();

const messagesController = require('../../controllers/OrderController/order.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })

module.exports = router;