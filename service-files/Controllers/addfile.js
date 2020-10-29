
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.upload = (req, res) => {
    if (req.file) {
        response.response('success', res, req.file.filename, 200, null);
    } else {
        response.response("error", res, "FILE NOT PRESENT", 500, null);
    }
}