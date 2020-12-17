
const jwt = require('../../middlewares/jwt/jwt');
const response = require('../../Handler/MessageHandler/response.controller');
var  passport = require("passport");
const user = require("../../models/message/message");

module.exports = {
    sendMessage: (req, res, next) => {
        console.log("working");
    }
}