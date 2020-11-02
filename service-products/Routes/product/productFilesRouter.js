const express = require('express');


var router = express.Router();


const productController = require('../../Controllers/product.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",productController.addImage)

    .get("/",productController.allProduct)
    
    .put("/",productController.updateProduct);


module.exports = router;