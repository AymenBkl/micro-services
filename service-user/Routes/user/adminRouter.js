const express = require('express');


var router = express.Router();


const userController = require('../../Controllers/user.controller');

router.all("/addfile", (req, res, next) => {
    console.log('here');
    next();
})
    .options("/addfile", (req, res, next) => {
        next();
    })
    .post("/addfile", userController.addFileExCel)


module.exports = router;