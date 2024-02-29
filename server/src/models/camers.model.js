const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:{type:String,required:true},

},{
    timestamps:true,
    versionKey:false
})


const cameraModel = mongoose.model("camera", cameraSchema);

module.exports = {cameraModel}