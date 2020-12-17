const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const messageSchema = new Schema({

    message:{
        type: String,
    },
    from : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    },
    to : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true,
    }
} , {
    timestamps : true,
    strict : true
}
)




module.exports = mongoose.model('Messages',messageSchema);