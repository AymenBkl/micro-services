const express = require('express');


var router = express.Router();


const prescriptionController = require('../../Controllers/prescription.controller');


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",prescriptionController.addImage)

    .get("/",prescriptionController.getAllCategory)
    
    .put("/",prescriptionController.updateCategory);


module.exports = router;