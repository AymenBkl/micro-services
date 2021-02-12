const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mainProductSchema = new Schema({

    name : {
        type : String,
        required : true,
        unique:true
    },

    initial_price : {
        type : Number,
    },
    description : {
        type : String,
    },
    quantity : {
        type : Number,
        required:false
    },

    packing : {
        type : String,
        required:false
    },

    hsnocde : {
        type : Number,
        required:false
    },

    cgst : {
        type : Number,
        required:false
    },
    sgst : {
        type : Number,
        required:false
    },
    igst : {
        type : Number,
        required:false
    },

    company_name : {
        type : String,
        default : '',
    },
    status : {
        type : String,
        default : 'active',
    },
    imageUrl : {
        type : String,
        default : '',
    },
} , {
    timestamps : true,
    strict: false
}
)


module.exports = mongoose.model('mainproduct',mainProductSchema);