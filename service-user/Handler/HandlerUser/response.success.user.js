module.exports.success = (res,token,status,user) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Success ",success: true,status : status,user : user});
}