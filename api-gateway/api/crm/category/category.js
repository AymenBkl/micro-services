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
    .post('/addcategory', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next);
    })
    .get('/allcategory', jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next);
    })
    .get('/getcategory/:categoryId', jwt.verifyUser, jwt.verifyPharmacyAdmin, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next,'','/getcategory/' + req.params.categoryId);
    })
    .put('/updatecategory/:categoryId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next);
    })
    .put('/appendproducts/:categoryId', jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next,'','/appendproducts');
    })
    .delete("/deletecategory/:categoryId", jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next);
    })
    .delete("/removeproduct/:categoryId/product/:productId", jwt.verifyUser, jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.categoryId = req.params.categoryId;
        req.body.metadata.productId = req.params.productId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next,'','/removeproduct');
    });

router.all('/searchcategory', function (req, res, next) {
    next();
})
    .options('/',  (req, res, next) => {
        next();
    })
    
    .post('/', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        console.log("here");
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, false, req, res, next,'','/searchcategory');
    });




module.exports = router;