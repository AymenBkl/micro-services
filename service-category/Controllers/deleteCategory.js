const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.addCategory = (res,id) =>{
    return new Promise((resolve, reject) => {
    console.log(id);
    category.findByIdAndDelete(id)
        .then(result => {
            if (result){
                resolve({type:"success",res : res,msg : "Category Deleted",status : 200,category : null});
            }
            else {
                resolve({type:"error",res : res,msg : msg,status: 404,category  : null});
            }
        } )
        .catch(err => {
            reject({type:"error",res : res,msg : err,status: 500,category  : null});
        })
    });
}