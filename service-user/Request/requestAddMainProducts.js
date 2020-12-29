var request = require('request');


function requests(req,res,next,obj){
    return new Promise((resolve,reject) => {        
        request.post({
            url : 'http://127.0.0.1:8080/api/crm/productsmanagement/addmainproduct', 
            json : obj,
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer " + req.headers.authorization.split(' ')[1]
        },
        },function(error, response, body){
            if (error != null) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(body);
            }
        }); 
    })
    
}




module.exports.request = requests;