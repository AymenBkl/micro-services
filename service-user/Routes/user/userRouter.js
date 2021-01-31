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

    .post("/addaddress",userController.addAddress)

    .post("/addfile",multer.single('file'), userController.addFileExCel)
    
    .post("/addpaymentdetail",userController.addPaymentDetail);

router.all("/searchpharmacies", (req, res, next) => {
    next();
})
    .options("/searchpharmacies", (req, res, next) => {
        next();
    })
    .post("/searchpharmacies", userController.searchPharmarcies)




module.exports = router;