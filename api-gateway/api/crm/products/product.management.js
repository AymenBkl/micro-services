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
    .post('/allproducts', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next);
    })
    .get('/searchproducts', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next, "/searchproducts");
    })
    .put('/updatecategory', jwt.verifyUser, jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next);
    });


router.all('/searchproducts', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, jwt.verifyPatient, (req, res, next) => {
        next();
    })
    .get('/', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next);
    })
    .post('/', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/searchproducts');
    })
    .put('/updatecategory', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next);
    });



module.exports = router;