
const referal = require('../../models/referal');
const order = require('../../models/order');
const response = require('../../Handler/OrderHandler/response.controller');
const user = require('../../models/user');

module.exports = {
    getReferal: (req, res, next) => {
        referal.find()
        .populate([{path:'owner',select:"-salt -hash"},{path:'orders'}])
        .then((ref) => {
                if (ref) {
                    response.response("success",res,"Messages",200,ref);
                }
                else {
                    response.response("error",res,"undefined",404,null);
                }
            })
            .catch(err => {
                console.log(err);
                response.response("error",res,err,500,null);
            })
        
    }
}