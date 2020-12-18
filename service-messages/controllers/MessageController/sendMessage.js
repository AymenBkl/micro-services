
const message = require("../../models/message/message");
const response = require('../../Handler/MessageHandler/response.controller');

module.exports = {
    sendMessage: (req, res, next) => {
        req.body.from = req.query.id;
        req.body.to = "5fdbc605e73da941505b1b9d";
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