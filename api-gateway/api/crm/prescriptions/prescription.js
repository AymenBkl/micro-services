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
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next);
    })
    .get('/allprescription', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next);
    })
    .get('/getprescription/:prescriptionId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/getprescription/' + req.params.prescriptionId);
    })
    .put('/updateprescription/:prescriptionId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.prescriptionId;
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next);
    })
    .put('/appendproducts/:prescriptionId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.prescriptionId;
        var request = new apiGateway();
        request.sendRequest("ServicePrescription", "Routes/prescription.route", req.method, false, req, res, next,'','/appendproducts');
    })

module.exports = router;