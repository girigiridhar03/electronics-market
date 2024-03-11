const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:[{type:String,required:true}],
    brand:{type:String,required:true,}

},{
    timestamps:true,
    versionKey:false
})


const mobileModel = mongoose.model("mobile", mobileSchema);

module.exports = {mobileModel}