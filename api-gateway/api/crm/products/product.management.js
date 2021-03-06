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
    .post('/findproducts', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/findproducts');
    })
    .post('/findproductcategorie', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/findproductcategorie');
    });


router.all('/searchproducts', function (req, res, next) {
    next();
})
    .options('/searchproducts', (req, res, next) => {
        next();
    })
    .post('/searchproducts', jwt.verifyUser, jwt.verifyPatient, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/searchproducts');
    });
    

router.all('/addmainproduct', function (req, res, next) {
        next();
    })
        .options('/addmainproduct', (req, res, next) => {
            next();
        })
        .post('/addmainproduct', jwt.verifyUser, jwt.verifyPharmacyAdmin, function (req, res, next) {
            var request = new apiGateway();
            request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/addmainproduct');
        })
        .get('/addmainproduct', jwt.verifyUser, jwt.verifyPharmacyAdmin, function (req, res, next) {
            var request = new apiGateway();
            request.sendRequest("ServiceProducts", "Routes/product.management", req.method, false, req, res, next,'','/addmainproduct');
        })
   

module.exports = router;