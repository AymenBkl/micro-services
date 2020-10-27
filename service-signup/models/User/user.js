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
var autoPopulateLead = function(next) {
    this.populate('facebook');
    this.populate('google');
    this.populate('instagram');
    this.populate('twitter');
    this.populate('phone');
    next();
  };
  
userSchema.
pre('findOne', autoPopulateLead).
pre('find', autoPopulateLead).
pre('findByIdAndUpdate', autoPopulateLead);

userSchema.plugin(passportLocalMongoose);
validators.validators.emailValidator(userSchema);
module.exports = mongoose.model('User',userSchema);