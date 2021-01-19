const express = require('express');


var router = express.Router();


const prescriptionController = require('../../Controllers/prescription.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",prescriptionController.addPrescription)

    .get("/",prescriptionController.getAllCategory)
    
    .get("/getcategory/:categoryId",prescriptionController.getCategory)

    .put("/",prescriptionController.updateCategory)
    
    .put('/appendproducts',prescriptionController.appendProducts)

    .delete('/removeproduct',prescriptionController.removeProduct)
    
    .delete("/",prescriptionController.deleteCategory);

router.all("/searchcategory", (req, res, next) => {
        next();
    })
        .options("/searchcategory", (req, res, next) => {
            next();
        })
        .post("/searchcategory", prescriptionController.searchCategory);


module.exports = router;