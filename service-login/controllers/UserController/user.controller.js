
const loginUser = require('./loginUser');

const resetPassword = require('./reset-password');
module.exports = {
    login : (req,res,next) => {
        console.log(req.body)
        loginUser.login(req,res,next);
    },

    resetPassword : (req,res,next) => {
        console.log(req.body)
        resetPassword.resetPassword(req,res,next);
    },

}

