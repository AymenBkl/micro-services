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
} , {
    timestamps : true,
    strict : true
}
)

userSchema.plugin(passportLocalMongoose,{ usernameField : 'phoneNumber' });
userSchema.plugin(require('mongoose-autopopulate'));
validators.validators.phoneValidator(userSchema);
module.exports = mongoose.model('User',userSchema);