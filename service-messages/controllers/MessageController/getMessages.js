
const message = require("../../models/message/message");
const response = require('../../Handler/MessageHandler/response.controller');
const user = require('../../models/message/user');

module.exports = {
    getAllMessages: (req, res, next) => {
        message.find({$or : [{from : req.query.id},{to:req.query.id}]})
        .populate({path:'to'})
        .populate({path:'from'})
        .select("-salt -hash")
        .sort('-createdAt')
        .then((messsage) => {
                if (messsage && messsage.length != 0) {
                    response.response("success",res,"Messages",200,messsage);
                }
                else {
                    response.response("error",res,"undefined",404,null);
                }
            })
            .catch(err => {
                console.log(err);
                response.response("error",res,err,500,null);
            })
        
    }
}