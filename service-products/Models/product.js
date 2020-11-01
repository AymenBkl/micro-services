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
    description : {
        type : String,
        required : true,
    },

    category : {
        type : mongoose.Types.ObjectId,
        ref : 'Category',
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