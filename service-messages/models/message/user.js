


const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({

    firstname : {
        type : String,
        default : ''
    },

    lastname : {
        type : String,
        default : ''
    },

    

    phoneNumber : {
        type : Number,
        required : true,
        unique : true,
        index : true
    },


    role : {
        type : String,
        required : true
    },
    status:{
        type : String,
        default : 'active'
    },
    imageUrl : {
        type : String,
        default : '',
    },
} , {
    timestamps : true,
    strict : true
}
)




module.exports = mongoose.model('User',userSchema);