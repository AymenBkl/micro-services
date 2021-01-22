const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const addressSchema = new Schema({

    city : {
        type : String,
        required:true,
    },

    streetName : {
        type : String,
        required:true,
    },

    streetName1 : {
        type : String,
        default:'',
    },


    postalCode : {
        type : Number,
        required : true,
    },
    buildingNumber: {
        type:Number,
        required:true
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


module.exports = mongoose.model('address',addressSchema);