const user = require("../../models/User/user");

const passport = require("passport");


const registerUser = require('./user.signup');


//const checkJWT = require('./checkJWT');


module.exports = {
    signUp : (req,res,next) => {
        const newUser = new user({
            email : req.body.email,
            username : req.body.username,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            role : req.body.role
        })
        registerUser.registerUser(req,res,newUser,req.body.password);
    },
    /**check : (req,res,next) => {
        checkJWT.checkJWT(req,res,next);
    },**/

}

