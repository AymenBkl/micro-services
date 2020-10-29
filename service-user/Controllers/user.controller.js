


const updateImage = require('./updateImage');



//const checkJWT = require('./checkJWT');


module.exports = {
    updateImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },


}

