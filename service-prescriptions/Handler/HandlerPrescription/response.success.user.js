module.exports.success = (res,token,status,prescription) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Success ",success: true,status : status,prescription : prescription});
}