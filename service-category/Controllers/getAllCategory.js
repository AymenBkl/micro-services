const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.getAll = (res,pharmacyId) =>{
    return new Promise((resolve, reject) => {

    category.find({
        pharmacy : pharmacyId
    })
        .then(categories => {
            if (categories){
                resolve({type:"success",res : res,msg : "Categories Found",status : 200,category : categories});
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