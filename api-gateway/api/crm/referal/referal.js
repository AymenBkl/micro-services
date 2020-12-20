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
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/createreferal', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/referal.route", req.method, false, req, res, next);
    })
    .get('/getallreferal', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/referal.route", req.method, false, req, res, next,'','/allreferal');
    })
    .get('/getreferal', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/referal.route", req.method, false, req, res, next);
    })
    .put('/updatereferal/:referalId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.referalId = req.params.referalId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/referal.route", req.method, false, req, res, next);
    })
    .delete("/deletereferal/:referalId", jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.referalId = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/referal.route", req.method, false, req, res, next);
    });






module.exports = router;