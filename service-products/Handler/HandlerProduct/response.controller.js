const errResponse = require('./response.err.user');
const successResponse = require('./response.success.user');

module.exports.response = (type,res,msg,status,product) => {
    console.log(type);
    if (type == 'error'){
        return errResponse.error(res,msg,status,product);
    }
    else if (type == 'success'){
        return successResponse.success(res,msg,status,product);
    }
}