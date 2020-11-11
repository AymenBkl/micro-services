const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.updateCategory = (res,id,query) =>{
    return new Promise((resolve, reject) => {

    console.log(id);

    category.findByIdAndUpdate(id,query,{new : true})
        .then(category => {
            if (category){
                resolve({type:"success",res : res,msg : "Category Updated",status : 200,category : category});
            }
            else {
                resolve({type:"error",res : res,msg : "undefined",status: 404,category  : null});
            }
        } )
        .catch(err => {
            reject({type:"error",res : res,msg : err,status: 500,category  : null});

        })
    });
}