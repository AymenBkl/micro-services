const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const paymentDetailsSchema = new Schema({

    bankAccountNumber : {
        type : String,
        required:true,
    },

    IFSCCODE : {
        type : String,
        required:true,
    },

    ACCOUNTHOLDERNAME : {
        type : String,
        default:'',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
} , {
    timestamps : true,
    strict : true
}
)


module.exports = mongoose.model('paymentdetail',paymentDetailsSchema);