const order = require('../../models/order');

const response = require('../../Handler/OrderHandler/response.controller');

module.exports.updateOrder = (res,orderId,query) =>{
    order.findByIdAndUpdate(orderId,query,{new : true})
        .then(order => {
            if (order){
                response.response("success",res,"USER FOUND",200,order);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}