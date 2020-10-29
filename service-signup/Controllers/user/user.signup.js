const user = require("../../models/User/user");
const response = require('../../Handler/UserHandler/response.controller');
const jwt = require('../../Middlewares/jwt/jwt');
const passport = require("passport");
var request = require('request');
module.exports = {

    registerUser : (req,res,newUser,password) => {
        user.register(newUser,password,(err,user) => {
            if (err){
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

function requests(){
    var contents = {
        headers: { 'content-type': 'application/json' }, 
        url: 'http://localhost:8080/api/account/addfile', 
        uri: 'http://localhost:8080/api/account/addfile',
        body: {}
    }
    request.post('http://localhost:8080/api/account/addfile',function(error, response, body){
        console.log(body);
    }); 
}