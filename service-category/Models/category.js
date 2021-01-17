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

    products: {
        type : mongoose.Types.ObjectId,
        ref : 'mainproduct',
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