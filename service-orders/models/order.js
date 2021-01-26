const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({


    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },


    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: 'product',
            required: true
        }, quantity: {
            type: Number,
            required: true,
            default: 1
        },
        refundedQuantity:{
            type: Number,
            required: true,
            default: 0
        }
    }],
    pharmacy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },

    referal: {
        type: mongoose.Types.ObjectId,
        ref: 'referal',
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },

    status: {
        type: String,
        required: true,
        default: 'created'
    },
    method: {
        type: String,
        required: true,
        default: 'cod'
    },
    address:{
        type: mongoose.Types.ObjectId,
        ref: 'address',
    },
    payedByAdmin: {
        type: String,
        default: 'NOT PAIED'
    },
    refund:{
        type: mongoose.Types.ObjectId,
        ref: 'refunds',
    },

}, {
    timestamps: true,
}
)


module.exports = mongoose.model('order', productSchema);