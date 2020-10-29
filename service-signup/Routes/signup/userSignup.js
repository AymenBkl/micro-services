const express = require('express');


var router = express.Router();

const userController = require('../../Controllers/user/user.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",userController.signUp);

module.exports = router;