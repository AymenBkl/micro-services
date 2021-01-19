const errResponse = require('./response.err.user');
const successResponse = require('./response.success.user');

module.exports.response = (type,res,msg,status,prescription) => {
    console.log(type);
    if (type == 'error'){
        return errResponse.error(res,msg,status,prescription);
    }
    else if (type == 'success'){
        return successResponse.success(res,msg,status,prescription);
    }
}