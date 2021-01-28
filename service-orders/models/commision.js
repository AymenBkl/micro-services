const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commissionSchema = new Schema({

    name : {
        type : String,
        required : true,
        unique: true,
    },
    commission : {
        type : Number,
        required : true,
        unique: true,
    }
} , {
    timestamps : true,
}
)

module.exports = mongoose.model('commission',commissionSchema);