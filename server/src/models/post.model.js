const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    image:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    comments:[{
        text:String,
        userId:{type:mongoose.Types.ObjectId, ref:"user"}
    }],
    likes:[
        {
            user:String
        }
    ]
    
},{
    timestamps:true,
    versionKey:false
})


const postModel = mongoose.model("post", postSchema);

module.exports = {postModel}