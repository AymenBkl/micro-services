const user = require("../../models/User/user");
const response = require('../../Handler/UserHandler/response.controller');
const jwt = require('../../Middlewares/jwt/jwt');
const passport = require("passport");
var request = require('request');
module.exports = {

    registerUser : (req,res,newUser,password) => {
        user.register(newUser,password,(err,user) => {
            if (err){
                console.log(err);
                response.response('error',res,err,500)
            }
            else {
                console.log(user);
                passport.authenticate("local")(req,res,() => {
                   response.response('success',res,jwt.getToken({_id:user._id}),200);
                })
            }
        })     
}
}

