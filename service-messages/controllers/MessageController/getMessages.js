
const message = require("../../models/message/message");
const response = require('../../Handler/MessageHandler/response.controller');

module.exports = {
    getAllMessages: (req, res, next) => {
        message.find({from : req.query.id})
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
                response.response("error",res,err,500,null);
            })
        
    }
}