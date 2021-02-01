const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const refundSchema = new Schema({


    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pharmacy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order: {
        type: mongoose.Types.ObjectId,
        ref: 'order',
        required: true
    },
    payedByAdmin: {
        type: String,
        default: 'NOT PAIED'
    },
    refundPrice: {
        type: Number,
        required: true,
        default: 1
    }

}, {
    timestamps: true,
}
)


module.exports = mongoose.model('refunds', refundSchema);