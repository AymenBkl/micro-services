module.exports.success = (res,token,status,message) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Welcom to NAT3RFOU ",success: true,token : token,status : status,message : message});
}