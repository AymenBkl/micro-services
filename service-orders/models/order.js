const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({

    
    patient : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    },


    products : [{
        type : mongoose.Types.ObjectId,
        ref : 'product',
        required : true
    }],
    pharmacy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    },

    referal : {
        type : mongoose.Types.ObjectId,
        ref : 'referal',
    },

    totalPrice : {
        type : Number,
        required : true,
        default:0
    },

} , {
    timestamps : true,
}
)


module.exports = mongoose.model('order',productSchema);