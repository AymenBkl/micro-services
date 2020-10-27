

var express = require('express'),
router = express.Router(),
apiGateway = require('../.././api-gateway');


router.get('/', function (req, res,next) {
    var request = new apiGateway();
    request.sendRequest("ServiceSignup","jwt",req, res,next);
});

module.exports = router;