const comment = require('../Models/commet');

const response = require('../Handler/HandlerPrescription/response.controller');


const updatePrescription = require('./updatePrescription');

module.exports.addComment = (res,body) =>{
    console.log("body",body);
    comment.create(body)
        .then(comment => {
            console.log(comment);
            if (comment){
                const query = {
                    $addToSet: { comments: comment._id } ,
                    
               }
               const option = {upsert : true};
               updatePrescription.updatePrescription(res,body.prescription,query,option);
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