import User from "../models/user.model.js";

export const getUsers=async(req,res)=>{
    try{
     
    const loggedinuserid=req.user._id;

    const filteredUsers=await User.find({_id:{ $ne:loggedinuserid }}).select("-password")
    res.status(200).json({
        filteredUsers
    })

    }
    catch(err){
        console.log(err);
        res.status(500).json("internal server error");
    }
}