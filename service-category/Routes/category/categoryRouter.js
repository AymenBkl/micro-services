const express = require('express');


var router = express.Router();


const categoryController = require('../../Controllers/category.controller');


router.all("/", (req, res, next) => {
    console.log('here');
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",categoryController.addCategory)

    .get("/",categoryController.updateImage)
    
    .put("/",categoryController.updateUser);


module.exports = router;