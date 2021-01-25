const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const validators = require('./validators.users');
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

    phoneNumber : {
        type : Number,
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
} , {
    timestamps : true,
    strict : true
}
)

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(require('mongoose-autopopulate'));
validators.validators.emailValidator(userSchema);
validators.validators.phoneValidator(userSchema);
module.exports = mongoose.model('User',userSchema);