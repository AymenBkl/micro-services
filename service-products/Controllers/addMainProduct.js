const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const { updateOne } = require('../Models/main-product');

module.exports.addProduct = (res,body) =>{
    mainProduct.bulkWrite(
        body.map((product) => 
          ({
            updateOne: {
              filter: { name : product.name },
              update: { $set: product },
              upsert: true
            }
          })
        )
      )
        .then(product => {
            if (product){
                response.response("success",res,"Main Product CREATED",200,product);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            console.log(err);
            response.response("error",res,err,500,null);
        })
}