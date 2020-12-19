
const message = require("../../models/message/message");
const response = require('../../Handler/MessageHandler/response.controller');

module.exports = {
    sendMessage: (req, res, next) => {
        req.body.from = req.query.id;
        console.log(req.body);
        message.create(req.body)
            .then((messsage) => {
                if (messsage) {
                    response.response("success",res,"Message Sent",200,messsage);
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