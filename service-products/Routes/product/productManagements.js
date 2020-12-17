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
    .options("/searchproducts", (req, res, next) => {
        next();
    })
    .post("/searchproducts", productController.searchProduct);


router.all("/addmainproduct", (req, res, next) => {
        next();
    })
        .options("/addmainproduct", (req, res, next) => {
            next();
        })
        .post("/addmainproduct", productController.addMainProduct);


module.exports = router;