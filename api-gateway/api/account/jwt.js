

var express = require('express'),
router = express.Router();

const jwt = require('../../middlewares/jwt/jwt');


const controller = require('../../controllers/checkjwt');

router.options('/',(req,res,next) => {
    next();
});

router.get('/',controller.checkJWT);

module.exports = router;