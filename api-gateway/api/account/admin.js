var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

const jwt = require('../../middlewares/jwt/jwt');


router.all('', function (req, res, next) {
    next();
})
    .options('/', jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/addfile', jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        console.log('here');
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/admin.route", req.method, true, req, res, next,queryParams,'/addfile');
    })
    .put('/updatemainproduct/:mainproductId',jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method,false, req, res, next,'','/updatemainproduct');
    })
    .delete("/deletemainproduct/:mainproductId",jwt.verifyUser,jwt.verifyAdmin, function (req, res, next) {
        req.body.metadata = {};
        req.body.metadata.mainproductId = req.params.mainproductId;
        var request = new apiGateway();
        request.sendRequest("ServiceProducts","Routes/product.route", req.method,false, req, res, next,'','/deletemainproduct');
    });;





module.exports = router;