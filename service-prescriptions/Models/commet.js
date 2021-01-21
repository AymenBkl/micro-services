const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commentSchema = new Schema({

    pharmacy: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },

    status: {
        type: String,
        required: true,
        default: true
    },
    prescription: {
        type: mongoose.Types.ObjectId,
        ref: 'prescription',
    },
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: 'product',
        }, 
        quantity: {
            type: Number,
            default: 0
        }
    }]
}, {
    timestamps: true,
}
)


module.exports = mongoose.model('comment', commentSchema);