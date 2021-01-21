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

    .get("/getallprescriptionpatient",prescriptionController.gettAllPrescriptionsPatient)
    
    .get("/getallprescriptionpharmacy",prescriptionController.gettAllPrescriptionsPharmacy)

    .get("/getcategory/:categoryId",prescriptionController.getCategory)

    .put("/",prescriptionController.updatePrescription)
    
    .put("/approveprescription",prescriptionController.approvePrescription);
    



module.exports = router;