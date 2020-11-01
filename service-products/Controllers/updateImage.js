const request = require('../Request/requestFile').request;

const updateCategory = require('./updateProduct');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports = {
    upadeteImage : (req,res,next) => {
        request(req,res,next)
            .then(result => {
                console.log(result,req.query.categoryId);
                if (result && result.status == 200){
                    const query = {
                        $set : {imageUrl : result.msg}
                    }
                    updateCategory.updateCategory(res,req.query.categoryId,query);
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