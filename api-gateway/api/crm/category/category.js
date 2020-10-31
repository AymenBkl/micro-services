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
    .post('/addcategory',jwt.verifyUser,jwt.verifyPharmacy,function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory", "Routes/category.route", req.method, true, req, res, next);
    })
    .get('/category/:userId',jwt.verifyUser,jwt.verifyPharmacy, function (req, res, next) {
        req.body.id = req.params.userId;
        var request = new apiGateway();
        request.sendRequest("ServiceCategory","Routes/category.route", req.method,false, req, res, next);
    })
    .put('/updatecategory',jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceCategory",jwt.verifyPharmacy, "Routes/category.route", req.method,false, req, res, next);
    });





module.exports = router;