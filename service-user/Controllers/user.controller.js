const user = require("../../models/User/user");

const passport = require("passport");


const registerUser = require('./user.signup');


//const checkJWT = require('./checkJWT');


module.exports = {
    updateImage : (req,res,next) => {
        
        registerUser.registerUser(req,res,newUser,req.body.password);
    },
    /**check : (req,res,next) => {
        checkJWT.checkJWT(req,res,next);
    },**/

}

