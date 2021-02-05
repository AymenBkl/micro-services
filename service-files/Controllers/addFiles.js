
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.upload = (req, res) => {
    if (req.files && req.files.length > 0) {
        let images = [];
        req.files.map(file => {
            images.push('http://192.168.1.104:8080//' + file.filename)
        })
        response.response('success', res, images, 200, null);
    } else {
        response.response("error", res, "FILE NOT PRESENT", 500, null);
    }
}
