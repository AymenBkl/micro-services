

var express = require('express'),
router = express.Router();

const jwt = require('../../middlewares/jwt/jwt');


const controller = require('../../controllers/checkjwt');

router.get('/',controller.checkJWT);

module.exports = router;