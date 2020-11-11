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
    .options('/', jwt.verifyUser, jwt.verifyPharmacy, (req, res, next) => {
        next();
    })
    .post('/addcategory', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "/api/category", req.method, false, req, res, next);
    })
    .get('/allcategory', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "/api/category", req.method, false, req, res, next);
    })
    .put('/updatecategory/:categoryId', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "/api/category", req.method, false, req, res, next);
    })
    .delete("/deletecategory/:categoryId", jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.id = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "/api/category", req.method, false, req, res, next);
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
        request.sendRequest("ServiceCategory", "/api/category", req.method, false, req, res, next,'','/searchcategory');
    });




module.exports = router;