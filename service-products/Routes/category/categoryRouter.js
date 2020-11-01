const express = require('express');


var router = express.Router();


const categoryController = require('../../Controllers/product.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",categoryController.addCategory)

    .get("/",categoryController.getAllCategory)
    
    .put("/",categoryController.updateCategory)

    .delete("/",categoryController.deleteCategory);


module.exports = router;