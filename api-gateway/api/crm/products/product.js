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
    .options('/',jwt.verifyUser,jwt.verifyPharmacy, (req, res, next) => {
        next();
    })
    .post('/addproduct/:mainproductId',jwt.verifyUser,jwt.verifyPharmacy,function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method, false, req, res, next);
    })
    .get('/allproduct/:mainproductId/pharmacy/:pharmacyId',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        req.body.metadata.pharmacyId = req.params.pharmacyId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method,false, req, res, next);
    })
    .put('/updateproduct/:productId',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.productId = req.params.productId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method,false, req, res, next);
    })
    .delete("/deleteproduct/:productId",jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.productId = req.params.productId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method,false, req, res, next);
    });





module.exports = router;