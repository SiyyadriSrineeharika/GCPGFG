
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calorielogSchema = new Schema({
    activity:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    weight:{
        type:String,
        required:true,
    },
    burnedcal:{
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

module.exports = mongoose.model('calorielog',calorielogSchema)