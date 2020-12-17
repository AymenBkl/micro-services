
const sendMessage = require('./sendMessage');

module.exports = {
    sendMessage : (req,res,next) => {
        console.log(req.body)
        sendMessage.sendMessage(req,res,next);
    },

}

