const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const referalValidator = require('./validators/validator.code.referal');

const referalSchema = new Schema({

    code : {
        type : String,
        required : true,
        unique: true,
    },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true,
        unique:true
    },

    orders : [{
        type : mongoose.Types.ObjectId,
        ref : 'order',
    }],
} , {
    timestamps : true,
}
)

referalValidator.validators.codeValidator(referalSchema);

referalValidator.validators.userValidator(referalSchema);

module.exports = mongoose.model('referal',referalSchema);