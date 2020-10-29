const express = require('express');


var router = express.Router();


const userController = require('../../Controllers/user.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",userController.updateImage)

    .get("/", (req, res, next) => {
        res.send('this a test route')
    })


module.exports = router;