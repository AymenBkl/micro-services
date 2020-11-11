const user = require('../Models/user');


module.exports.getUser = (res,id,query) =>{
    return new Promise((resolve, reject) => {
        user.findById(id)
        .select("-salt -hash")
        .then(user => {
            if (user){
                resolve({type:"success",res : res,msg : "USER FOUND",status : 200,user : user});
            }
            else {
                resolve({type:"error",res : res,msg : "undefined",status: 404,user : null});
            }
        } )
        .catch(err => {
            reject({type:"error",res : res,msg : err,status: 500,user : null});
        })
    });
    
}