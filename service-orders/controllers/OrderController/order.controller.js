
const sendMessage = require('./sendMessage');

const allMessages = require('./getMessages');
module.exports = {
    sendMessage : (req,res,next) => {
        console.log(req.body)
        sendMessage.sendMessage(req,res,next);
    },

    getMessages : (req,res,next) => {
        allMessages.getAllMessages(req,res,next);
    },

}

