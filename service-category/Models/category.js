const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = new Schema({

    name : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },

    pharmacy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    },
    imageUrl : {
        type : String,
        default : '',
    },
} , {
    timestamps : true,
}
)


module.exports = mongoose.model('category',categorySchema);