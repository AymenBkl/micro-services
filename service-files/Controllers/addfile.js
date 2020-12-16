
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.upload = (req, res) => {
    if (req.file) {
        var fullUrl = req.file.filename;
        response.response('success', res, fullUrl, 200, null);
    } else {
        response.response("error", res, "FILE NOT PRESENT", 500, null);
    }
}
