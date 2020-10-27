const passport = require("passport");
module.exports = {
    checkJWT: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                error(res, "TOKEN INVALID", 401,null)
            } else {
                success(res, "TOKEN VALID", 200,user)

            }
        })(req, res, next)
    }
}


function success(res,token,status,user){
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Welcom to NAT3RFOU ",success: true,token : token,status : status,user : user});
}

function error(res,err,status,user){
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Something Went Wrong !",success: false,err:err,status : status,user : user});
}