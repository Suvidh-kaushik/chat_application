import mongoose from "mongoose"


const msgSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

// timestamps :true makes mongoose aytomatically have fields createdAt and updatedAt
// it gives time the message was sent

const messages=mongoose.model("messages",msgSchema);

export default messages;