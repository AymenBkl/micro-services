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
    .post('/createreorder', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    })
    .post('/createrefund', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/createrefund');
    })

    .put('/updaterefund', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/updaterefund');
    })
    .get('/getallorders', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/allorders');
    })
    .get('/userallorders/:userId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/userallorders/' + req.params.userId);
    })
    .get('/allrefunds', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/allrefunds');
    })
    .get('/allrefundsadmin', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/allrefundsadmin');
    })
    .get('/getorder', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    })
    .get('/getcommission', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/getcommission');
    })
    .put('/updateorder/:orderId', jwt.verifyUser, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    })

    .put('/updatecommission/:commisionId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.commisionId = req.params.commisionId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/updatecommission');
    })
    .put('/paypharmacy/:orderId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/paypharmacy');
    })
    .put('/paypharmacy/:orderId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/paypharmacy');
    })
    .put('/pickuprefund/:orderId', jwt.verifyUser, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/pickuprefund');
    })
    .put('/payrerefund/:orderId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/payrerefund');
    })
    .put('/payreferal/:orderId', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/payreferal');
    })
    .delete("/deleteorders/:ordersId", jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.ordersId = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    });






module.exports = router;