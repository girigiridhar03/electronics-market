const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:[{type:String,required:true}],
    brand:{type:String,required:true,}

},{
    timestamps:true,
    versionKey:false
})


const homeModel = mongoose.model("home", homeSchema);

module.exports = {homeModel}


