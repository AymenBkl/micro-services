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
    .post('/addproduct/:categoryId',jwt.verifyUser,jwt.verifyPharmacy,function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.categoryId = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","/api/products", req.method, false, req, res, next);
    })
    .get('/allproduct/:categoryId',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.categoryId = req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","/api/products", req.method,false, req, res, next);
    })
    .put('/updateproduct/:productId',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.productId = req.params.productId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","/api/products", req.method,false, req, res, next);
    })
    .delete("/deleteproduct/:productId",jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.productId = req.params.productId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","/api/products", req.method,false, req, res, next);
    });





module.exports = router;