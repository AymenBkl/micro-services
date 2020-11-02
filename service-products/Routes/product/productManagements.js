const express = require('express');


var router = express.Router();


const productController = require('../../Controllers/product.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/", productController.allProduct)


    .get("/", productController.allProduct)

    .put("/", productController.updateProduct);


router.all("/searchproducts", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .get("/searchproducts", productController.allProduct)

    .post("/searchproducts", productController.searchProduct)

    .put("/searchproducts", productController.updateProduct);

module.exports = router;