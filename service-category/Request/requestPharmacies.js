var request = require('request');


function requests(req){
    return new Promise((resolve,reject) => {  
        console.log("here",req.body);  
        request.post({
            url : 'http://localhost:8080/api/account/user/searchpharmacies', 
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer " + req.headers.authorization.split(' ')[1]
        },
            json : req.body
        },function(error, response, body){
            if (error != null) {
                reject(error);
            }
            else {
                resolve(body);
            }
        }); 
    })
    
}


module.exports.request = requests;