const express = require('express');


var router = express.Router();

const loginController = require('../../controllers/UserController/loginUser');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",loginController.login);

module.exports = router;