const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    role : {
        type : String,
        required : true
    },
    addresses : [{
        type:mongoose.Types.ObjectId,
        ref: 'address',
        autopopulate: true
    }]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',userSchema);