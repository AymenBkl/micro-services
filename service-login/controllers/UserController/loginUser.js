
const jwt = require('../../middlewares/jwt/jwt');
const response = require('../../Handler/UserHandler/response.controller');
var  passport = require("passport");
const user = require("../../models/user/user");
const address = require("../../models/user/address");
const paymentDetail = require("../../models/user/paymentDetail");

module.exports = {
    login: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (!user) {
                console.log("wow?",user);
                response.response("error", res, info, 401,null);
                next();
            }
                req.logIn(user, (err) => {
                    console.log("err",err);
                    if (err) {
                        response.response("error", res, err, 401,null);
                    }
                    console.log(user);
                    const token = jwt.getToken({ _id: user._id });
                    response.response("success", res, token, 200,user);
                })
            })(req, res, next)
    }
}