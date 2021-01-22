const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

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
    addresses : [{
        type:mongoose.Types.ObjectId,
        ref: 'address',
        autopopulate: true
    }],
} , {
    timestamps : true,
    strict : true
}
)
userSchema.plugin(require('mongoose-autopopulate'));
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',userSchema);