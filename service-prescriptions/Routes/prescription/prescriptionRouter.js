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

    .post("/addcomment",prescriptionController.addComment)

    .get("/",prescriptionController.gettAllPrescriptions)
    
    .get("/getcategory/:categoryId",prescriptionController.getCategory)

    .put("/",prescriptionController.updatePrescription);
    



module.exports = router;