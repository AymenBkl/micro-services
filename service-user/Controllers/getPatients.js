const user = require('../Models/user');

const response = require('../Handler/HandlerUser/response.controller');

const address = require('../Models/address');

module.exports.getPatients = (res) =>{
    
    user.find({role:"patient"})
        .populate({path: 'addresses'})
        .select("-salt -hash")
        .then(users => {
            if (users && users.length > 0){
                response.response("success",res,"PATIENTS",200,users);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}