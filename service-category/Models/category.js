const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = new Schema({

    name : {
        type : String,
        default : ''
    },

    pharmacy : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    email : {
        type : String,
        required : true,
        unique : true,
        index : true
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


module.exports = mongoose.model('Category',userSchema);