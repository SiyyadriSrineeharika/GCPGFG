
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodlogSchema = new Schema({
    qty:{
        type:String,
        required:true,
    },
    Unit:{
        type:String,
        required:true,
    },
    food:{
        type:String,
        required:true,
    },
    Calories:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    }

})

module.exports = mongoose.model('foodlog',foodlogSchema)