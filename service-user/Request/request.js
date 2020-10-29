var request = require('request');


function requests(req,res,next){
    return new Promise((resolve,reject) => {
        console.log("wtf .");
        var contents = {
            url: 'http://localhost:8080/api/account/files/addfile', 
            body: req
        }
        request.post({
            url : 'http://localhost:8080/api/account/files/addfile', 
            body : req
        },function(error, response, body){
            console.log(error,response,body);
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