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
    addresses : [{
        type:mongoose.Types.ObjectId,
        ref: 'address',
        autopopulate: true
    }],
    paymentDetail : {
        type:mongoose.Types.ObjectId,
        ref: 'paymentdetail',
        autopopulate: true
    },
} , {
    timestamps : true,
    strict : true
}
)

userSchema.plugin(require('mongoose-autopopulate'));
validators.validators.phoneValidator(userSchema);
userSchema.plugin(passportLocalMongoose,{ usernameField : 'phoneNumber',passwordField: 'password' });

module.exports = mongoose.model('User',userSchema);