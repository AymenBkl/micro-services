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
        const queryParams = "?id=" + req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/admin.route", req.method, true, req, res, next,queryParams,'/addfile');
    });





module.exports = router;