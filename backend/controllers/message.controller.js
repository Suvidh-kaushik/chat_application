import convo from "../models/convo.model.js";
import messages from "../models/msg.model.js";
import { getRecieverSocketId,io} from "../socket/socket.js";


export const sendMessage=async(req,res)=>{
     try{
     const {message}=req.body; // similar to const message=req.body.message // calles object destructuring
     const {id:receiverId}=req.params //similar to const id=req.params.id
     const senderId=req.user._id;
      
   let conversation = await convo.findOne({
        participants:{
            $all:[senderId,receiverId],
        }
     })

    if(!conversation){
        conversation =await convo.create({
            participants:[senderId,receiverId]
        })
    }

    const newMessage=new messages({
        senderId:senderId,
        receiverId,
        message
    })
 
    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(),newMessage.save()]);
    // both will run in parallel time without taking individual times

    // await conversation.save();
    // await newMessage.save(); 

      //SOCKET.IO IS ADDED HERE
      const recieverSocketId= getRecieverSocketId(receiverId);
      console.log("reciever",recieverSocketId)
      if(recieverSocketId){
        io.to(recieverSocketId).emit("newMessage",newMessage);
      }






    res.status(201).json(newMessage);

     }catch(err){
        console.log(err);
        res.status(500).json({
            error:"Internal server error"
        })
     }

}


export const getMessages=async(req,res)=>{
try{
 
    const {id:usertochat}=req.params;
    const senderId=req.user._id;

    const conversation=await convo.findOne({
        participants:{$all:[senderId,usertochat]},
    }).populate("messages");
// instead of giving the messages array with ids of users it returns the entire messages

if(!conversation){
    return res.status(200).json([]);
}

res.status(200).json(conversation.messages);
    

}
catch(err){
  console.log(err);
  res.status(500).json({
    error:"internal server error"
  })
}
}

