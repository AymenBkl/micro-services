/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

const jwt = require('../../middlewares/jwt/jwt');

router.all('/', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/image', jwt.verifyUser, function (req, res, next) {
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, true, req, res, next, queryParams);
    })
    .post('/addaddress', jwt.verifyUser, function (req, res, next) {
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, queryParams, '/addaddress');
    })
    .post('/addpaymentdetail', jwt.verifyUser, function (req, res, next) {
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, queryParams, '/addpaymentdetail');
    })
    .get('/user/:userId', jwt.verifyUser, function (req, res, next) {
        req.body.id = req.params.userId;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next);
    })
    .get('/usermanagement/patients', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next,'','/usermanagement/patients');
    })
    .put('/updateuser', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next);
    })
    
    .put('/updatepaymentdetail/:paymentId', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, '', '/updatepaymentdetail/' + req.params.paymentId);
    })
    .put('/usermanagement/updateuser/:userId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, '', '/usermanagement/updateuser/' + req.params.userId);
    })
    .post('/addfile', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        console.log('here');
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, true, req, res, next, queryParams, '/addfile');
    })
    .put('/updatemainproduct/:mainproductId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.route", req.method, false, req, res, next, '', '/updatemainproduct');
    })
    .delete("/deletemainproduct/:mainproductId", jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.route", req.method, false, req, res, next, '', '/deletemainproduct');
    });


router.all('/user/searchpharmacies', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, '', '/searchpharmacies');
    });


router.all('/admin/addfile', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, true, req, res, next, '', '/addfile');
    });







module.exports = router;