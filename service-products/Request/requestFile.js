var request = require('request');


function requests(req,res,next){
    return new Promise((resolve,reject) => {        
        request.post({
            url : 'http://localhost:8080/api/account/files/addfile', 
            body : req
        },function(error, response, body){
            if (error != null) {
                reject(error);
            }
            else {
                resolve(JSON.parse(body));
            }
        }); 
    })
    
}


module.exports.request = requests;