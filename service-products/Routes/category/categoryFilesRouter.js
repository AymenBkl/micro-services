const express = require('express');


var router = express.Router();


const categoryController = require('../../Controllers/product.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",categoryController.addImage)

    .get("/",categoryController.getAllCategory)
    
    .put("/",categoryController.updateCategory);


module.exports = router;