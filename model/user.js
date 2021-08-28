const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    username:{
        type : Number,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    created:{
        type : Date,
        required : true,
        default:()=>Date.now(),
    },
});

module.exports = mongoose.model('User',userSchema);