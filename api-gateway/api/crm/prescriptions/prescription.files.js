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
    .options('/',jwt.verifyUser,jwt.verifyPatient, (req, res, next) => {
        next();
    })
    .post('/addimage',jwt.verifyUser,jwt.verifyPatient,function (req, res, next) {
        console.log("here");
        const queryParams = "?id="+req.user._id;
        console.log(queryParams,req.headers.authorization);
        let requestReq = req;
        var request = new apiGateway();
        request.sendRequest("ServicePrescription","Routes/prescriptionMangement.route", req.method, true, requestReq, res, next,queryParams);
    })
    .get('/allprescription',jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription","Routes/prescriptionMangement.route", req.method,false, req, res, next);
    })
    .put('/updateprescription',jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServicePrescription","Routes/prescriptionMangement.route", req.method,false, req, res, next);
    });





module.exports = router;