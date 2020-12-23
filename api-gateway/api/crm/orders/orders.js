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
    .get('/getallorders', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next,'','/allorders');
    })
    .get('/getorder', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    })
    .put('/updateorder/:orderId', jwt.verifyUser, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.orderId = req.params.orderId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    })
    .delete("/deleteorders/:ordersId", jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.ordersId = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceOrders", "Routes/orders.route", req.method, false, req, res, next);
    });






module.exports = router;