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
    imageUrl : {
        type : String,
        default : '',
    },
    addresses : [{
        type:mongoose.Types.ObjectId,
        ref: 'address'
    }],
    
    hash : {
        select : false,
    },
    salt : {
        select : false,
    }
} , {
    timestamps : true,
    strict : true
}
)


module.exports = mongoose.model('User',userSchema);