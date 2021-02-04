const express = require('express');


var router = express.Router();

const loginController = require('../../controllers/UserController/user.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",loginController.login)

    .post("/resetpassword",loginController.resetPassword);

module.exports = router;