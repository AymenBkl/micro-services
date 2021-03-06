
const response = require('../Handler/HandlerFiles/response.controller');
module.exports.upload = (req, res) => {
    console.log("files",req.body,req.files)
    if (req.files && req.files.length > 0) {
        let images = [];
        req.files.map(file => {
            if (file.originalname == 'new'){
                images.push('http://medsurgcompany.in/api/images//' + file.filename)
            }
            else {
                images.push('http://medsurgcompany.in/api/images//' + file.originalname)
            }
        })
        response.response('success', res, images, 200, null);
    } else {
        response.response("error", res, "FILE NOT PRESENT", 500, null);
    }
}
