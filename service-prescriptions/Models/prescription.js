const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const prescriptionSchema = new Schema({

    patient: {
        type : mongoose.Types.ObjectId,
        ref : 'User',
    },

    description : [{
        type : String,
        required : true,
    }],
    status:{
        type : String,
        required : true,
        default:true
    },
    comments: [{
        type : mongoose.Types.ObjectId,
        ref : 'comment', 
    }],
    imageUrl : [{
        type : String,
        default : '',
    }],
} , {
    timestamps : true,
}
)


module.exports = mongoose.model('prescription',prescriptionSchema);