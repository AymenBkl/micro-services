const errResponse = require('./response.err.user');
const successResponse = require('./response.success.user');

module.exports.response = (type,res,msg,status,message) => {
    console.log(type);
    if (type == 'error'){
        return errResponse.error(res,msg,status,message);
    }
    else if (type == 'success'){
        return successResponse.success(res,msg,status,message);
    }
}