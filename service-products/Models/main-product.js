const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mainProductSchema = new Schema({

    name : {
        type : String,
        required : true,
    },

    initial_price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required:false
    },

    packing : {
        type : Number,
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
    imageUrl : {
        type : String,
        default : '',
    },
} , {
    timestamps : true,
}
)


module.exports = mongoose.model('mainproduct',mainProductSchema);