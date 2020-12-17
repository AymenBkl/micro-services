const express = require('express');


var router = express.Router();

const messagesController = require('../../controllers/MessageController/message.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",messagesController.sendMessage);

module.exports = router;