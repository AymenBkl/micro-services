/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../../../api-gateway');

const jwt = require('../../../middlewares/jwt/jwt');

router.all('/', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, jwt.verifyAdmin, (req, res, next) => {
        next();
    })
    .post('/prescription', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        console.log("here");
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next);
    })
    .get('/allprescription/getallprescriptionpatient', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/getallprescriptionpatient');
    })
    .get('/allprescription/getallprescriptionpharmacy', jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/getallprescriptionpharmacy');
    })
    .get('/getprescription/:prescriptionId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/getprescription/' + req.params.prescriptionId);
    })
    .put('/updateprescription', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next);
    })
    .put('/approveprescription', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.prescriptionId;
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/approveprescription');
    })
    .post('/addcomment', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        console.log("herecomment");
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/addcomment');
    })

module.exports = router;