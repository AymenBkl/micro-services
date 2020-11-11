const request = require('../Request/requestFile').request;

const updateCategory = require('./updateCategory');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports = {
    upadeteImage : (req,res,next) => {
        return new Promise((resolve, reject) => {
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
                    resolve({type:"error",res : res,msg : msg,status: 404,category  : null});
                }
            })
            .catch(err => {
                reject({type:"error",res : res,msg : err,status: 500,category  : null});
            })
        });

    }
}