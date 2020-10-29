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

    email : {
        type : String,
        required : true,
        unique : true,
        index : true
    },

    username : {
        type : String,
        required : true,
        unique : true,
        index : true
    },
    emailVerified : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        default : '',
    },
    setup : {
        type : Boolean,
        default : false
    },
    facebook : [{
        type : mongoose.Types.ObjectId,
        ref : "facebook"
    }],
    google : [{
        type : mongoose.Types.ObjectId,
        ref : "google"
    }],
    instagram : [{
        type : mongoose.Types.ObjectId,
        ref : "instagram"
    }],
    twitter : [{
        type : mongoose.Types.ObjectId,
        ref : "twitter"
    }],
    phone : [{
        type : mongoose.Types.ObjectId,
        ref : "phone"
    }],
} , {
    timestamps : true,
    strict : true
}
)


module.exports = mongoose.model('User',userSchema);