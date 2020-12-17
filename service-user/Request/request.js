var request = require('request');


function requests(req,res,next){
    return new Promise((resolve,reject) => {
        console.log("wtf .");
        
        request.post({
            url : 'http://127.0.0.1:8080/api/account/files/addfile', 
            body : req
        },function(error, response, body){
            if (error != null) {
                reject(err);
            }
            else {
                resolve(JSON.parse(body));
            }
        }); 
    })
    
}




module.exports.request = requests;