const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({

    name : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true
    },


    mainProduct : {
        type : mongoose.Types.ObjectId,
        ref : 'mainproduct',
        required : true
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


module.exports = mongoose.model('product',productSchema);