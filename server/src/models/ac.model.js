const mongoose = require('mongoose');

const acSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:[{type:String,required:true}],
    brand:{type:String,required:true,},

},{
    timestamps:true,
    versionKey:false
})


const acModel = mongoose.model("ac", acSchema);

module.exports = {acModel}