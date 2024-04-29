import mongoose from "mongoose";

const convoSchema= new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"messages",
            default:[]
        }
    ]
},{timestamps:true});


const convo=mongoose.model("convo",convoSchema)


export default convo;
