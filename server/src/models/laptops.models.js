const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    brand:{type:String,required:true,}

},{
    timestamps:true,
    versionKey:false
})


const laptopModel = mongoose.model("laptop", laptopSchema);

module.exports = {laptopModel}