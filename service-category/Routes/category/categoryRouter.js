const express = require('express');


var router = express.Router();


const userController = require('../../Controllers/category.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",userController.updateImage)

    .get("/",userController.getUser)
    
    .put("/",userController.updateUser);


module.exports = router;