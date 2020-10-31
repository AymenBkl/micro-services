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
    .post('/addimage/:categoryId',jwt.verifyUser,jwt.verifyPharmacy,function (req, res, next) {
        const queryParams = "?id="+req.user._id+"&categoryId="+ req.params.categoryId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory","Routes/category.route", req.method, true, req, res, next,queryParams);
    })
    .get('/allcategory',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory","Routes/category.route", req.method,false, req, res, next);
    })
    .put('/updatecategory',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory","Routes/category.route", req.method,false, req, res, next);
    });





module.exports = router;