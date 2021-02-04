const user = require('../../models/user/user');

module.exports.resetPassword = (req,res,next) => {
    user.findByUsername(req.body.phoneNumber).then(function(sanitizedUser){
        if (sanitizedUser){
            sanitizedUser.setPassword(req.body.password, function(){
                sanitizedUser.save();
                res.status(200).json({message: 'password reset successful'});
            });
        } else {
            res.status(500).json({message: 'This user does not exist'});
        }
    },function(err){
        console.error(err);
    })
}