const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    foodlogs:[{type:mongoose.Types.ObjectId,ref:"foodlog",required:true}],
    calorielogs:[{type:mongoose.Types.ObjectId,ref:"calorielog",required:true}],
})

module.exports = mongoose.model("User",userSchema)

