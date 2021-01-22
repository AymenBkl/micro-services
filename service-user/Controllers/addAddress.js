
const address = require('../Models/address');

const updateUser = require('./updateUser');

const response = require('../Handler/HandlerUser/response.controller');

module.exports.addAddress = (res,userId,addressBody) => {
    addressBody.user = userId;
    address.create(addressBody)
        .then(address => {
            console.log(address);
            if (address){
                const query = {
                    $addToSet: { addresses: address } ,
               }
               updateUser.updateUser(res,userId,query);
            }
            else {
                response.response("error",res,"undefined",404,null);

            }
        })
        .catch(err => {
            response.response("error",res,"undefined",404,null);

        })
}