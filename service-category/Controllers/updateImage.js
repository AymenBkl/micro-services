const request = require('../Request/request').request;

const updateUser = require('./updateCategory');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports = {
    upadeteImage : (req,res,next) => {
        request(req,res,next)
            .then(result => {
                if (result && result.status == 200){
                    const query = {
                        $set : {imageUrl : result.msg}
                    }
                    updateUser.updateUser(res,req.query.id,query);
                }
                else {
                    response.response("error",res,result.msg,404,null);
                }
            })
            .catch(err => {
                response.response("error",res,err,500,null);
            })

    }
}