const express = require('express');


var router = express.Router();


const productController = require('../../Controllers/product.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",productController.addProduct)

    .get("/",productController.getAllProduct)
    
    .put("/",productController.updateProduct)

    .put("/updatemainproduct",productController.updateMainProduct)

    .delete("/",productController.deleteProduct)

    .delete("/deletemainproduct",productController.deleteMainProduct);


module.exports = router;