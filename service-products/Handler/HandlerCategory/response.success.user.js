module.exports.success = (res,token,status,category) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Success ",success: true,status : status,category : category});
}