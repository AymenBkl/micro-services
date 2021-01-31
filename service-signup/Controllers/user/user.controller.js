const user = require("../../models/User/user");

const passport = require("passport");


const registerUser = require('./user.signup');


//const checkJWT = require('./checkJWT');


module.exports = {
    signUp : (req,res,next) => {
        console.log(req.body)
        const newUser = new user({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            role : req.body.role
        })
        registerUser.registerUser(req,res,newUser,req.body.password);
    },
    /**check : (req,res,next) => {
        checkJWT.checkJWT(req,res,next);
    },**/

}

