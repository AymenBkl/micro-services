const userModel = require('../../models/user/user');
const response = require('../../Handler/UserHandler/response.controller');

module.exports.resetPassword = (req,res,next) => {
    userModel.findByUsername(req.body.phoneNumber)
        .then((sanitizedUser) => {
        console.log(sanitizedUser);
        if (sanitizedUser){
            sanitizedUser.setPassword(req.body.password)
                .then(updateUser =>{
                    console.log(updateUser);
                userModel.updateOne({phoneNumber:req.body.phoneNumber},updateUser)
                    .then((user) => {
                        if (user){
                            response.response("success", res, "YOUR PASSWORD HAS BEEN RESET", 200,null);
                        }
                        else {
                          response.response("error", res, 'error', 404,null);
                        }
                    })
                    .catch((err) => {
                        response.response("error", res, 'error', 500,null);
                    });
            });
        } else {
            response.response("error", res, "USER DOSN'T EXIST", 404,null);
        }
    },(err) => {
        response.response("error", res, 'error', 500,null);
    })
    .catch(err => {
        response.response("error", res, 'error', 500,null);
    })
}