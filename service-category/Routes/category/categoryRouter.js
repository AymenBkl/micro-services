const express = require('express');


var router = express.Router();


const categoryController = require('../../Controllers/category.controller');


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

router.all("/searchcategory", (req, res, next) => {
        next();
    })
        .options("/", (req, res, next) => {
            next();
        })
        .post("/searchcategory", categoryController.searchCategory);


module.exports = router;