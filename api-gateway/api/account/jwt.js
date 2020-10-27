

var express = require('express'),
router = express.Router();

const jwt = require('../../middlewares/jwt/jwt');

router.get('/',jwt.verifyUser,function (req, res,next) {
});

module.exports = router;