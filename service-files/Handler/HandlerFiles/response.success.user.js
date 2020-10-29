module.exports.success = (res,msg,status,user) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg :msg,success: true,status : status,user : user});
}