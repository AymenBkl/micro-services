
const loginUser = require('./loginUser');

module.exports = {
    login : (req,res,next) => {
        console.log(req.body)
        loginUser.login(req,res,next);
    },

}

