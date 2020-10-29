
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.upload = (req,res) => {
    console.log(req.file);
    if (req.file){
    const query = {
        $set : {imageUrl : req.file.filename}
    }
    response.response('success',res,req.file,200,null);
} else {
    response.response("error",res,"FILE NOT PRESENT",500,null);
}
}