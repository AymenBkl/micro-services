module.exports.success = (res,token,status,product) => {
    res.statusCode = status;
    res.setHeader("Content-Type","application/json");
    res.json({msg : "Success ",success: true,status : status,product : product});
}