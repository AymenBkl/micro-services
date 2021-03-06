const express = require('express');


var router = express.Router();


const userController = require('../../Controllers/user.controller');
const multer = require('../../Middlewares/multer').upload;


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/", userController.updateImage)

    .get("/", userController.getUser)

    .put("/", userController.updateUser)

    .put("/updatepaymentdetail/:paymentId", userController.updatePaymentDetail)

    .put("/usermanagement/updateuser/:userId", userController.updateUserAdmin)

    .post("/addaddress",userController.addAddress)

    .post("/addfile",multer.single('file'), userController.addFileExCel)
    
    .post("/addpaymentdetail",userController.addPaymentDetail)

    .get("/usermanagement/patients", userController.getPatients)

    .get("/usermanagement/pharmacies", userController.getPharmacies);

    
router.all("/searchpharmacies", (req, res, next) => {
    next();
})
    .options("/searchpharmacies", (req, res, next) => {
        next();
    })
    .post("/searchpharmacies", userController.searchPharmarcies)




module.exports = router;