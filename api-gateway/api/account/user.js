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
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, queryParams,'/addaddress');
    })
    .post('/addpaymentdetail', jwt.verifyUser, function (req, res, next) {
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next, queryParams,'/addpaymentdetail');
    })
    .get('/user/:userId', jwt.verifyUser, function (req, res, next) {
        req.body.id = req.params.userId;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next);
    })
    .put('/updateuser', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next);
    })
    .put('/updatepaymentdetail/:paymentId', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next,'','/updatepaymentdetail/' + req.params.paymentId);
    });


router.all('/user/searchpharmacies', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/', jwt.verifyUser,jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method, false, req, res, next,'','/searchpharmacies');
    });


router.all('/admin/addfile', function (req, res, next) {
        next();
    })
        .options('/', jwt.verifyUser, (req, res, next) => {
            next();
        })
        .post('/', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
            var request = new apiGateway();
            request.sendRequest("ServiceUser", "Routes/user.route", req.method, true, req, res, next,'','/addfile');
        });





module.exports = router;