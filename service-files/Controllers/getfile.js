const fs = require("fs");
const path = require('path');
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.getImage = (req, res) => {
    if (fs.existsSync('./uploads/'+req.body.imageUrl)) {
        var fullUrl = req.protocol + '://' + req.get('host') + '/'+req.body.imageUrl;
        response.response('success', res, fullUrl, 200, null);
    }
    else {
        response.response("error", res, "FILE NOT FOUND", 404, null);
    }
}

