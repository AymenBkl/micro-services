const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({

    
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
    },

    mainProduct : {
        type : mongoose.Types.ObjectId,
        ref : 'mainproduct',
        required : true
    },
    status : {
        type : String,
        default : 'active',
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