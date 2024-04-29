import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generatetoken from "../utilis/gen.token.js";

export const logout=async(req,res)=>{
  try{
    res.cookie("jwt","",{
      maxAge:0
    })
    res.status(200).json({
      msg:"logout successful"
    })

  }
  catch{
    console.log(err);
    console.log("error in logout controller")
      res.status(500).json({
        error:"internal server error"
      })
    }
}

export const signup=async (req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender} =req.body;


      if(password!==confirmPassword){
        return res.status(403).json({
        error:"Passwords do not match"
        })
      }
  
      const user=await User.findOne({username});

      if(user){
        return res.status(400).json({error:"Username already exists"});
      }
           
  
      const salt=await bcrypt.genSalt(10); //always create salt for bcryptjs(used to hash passwords)
//the amount in salt is means more secure but slower
  const hashedPassword=await bcrypt.hash(password,salt)


    //https://avatar-placeholder.iran.liara.run/   
    
    
    const boypic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlpic=`https://avatar.iran.liara.run/public/girl?username=${username}`

  const newUser=new User(
    {
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==="Male"?boypic:girlpic
    }
  )
    if(newUser){
  generatetoken(newUser._id,res)

 await newUser.save();
    }

res.status(201).json({
    _id:newUser._id,
    fullName:newUser.fullName,
    username:newUser.username,
    profilePic:newUser.profilePic
})

    }
    
    catch(err){  
      console.log(err);
        res.status(500).json({
         
            error:"internal server error"
        })

    }
}

export const signin=async (req,res)=>{
    try{
      const {username,password}=req.body;
      const user=await User.findOne({username});
      const isPassword=await bcrypt.compare(password,user?.password ||"") // last part very required if password is wrong code will return internal server error
 
  if(!user || !isPassword){
    return res.status(400).json({
      error:"invalid username/password"
    })
  }

  generatetoken(user._id,res);
 
  res.status(200).json({
    _id:user._id,
    fullName:user.fullName,
    username:user.username,
    profilePic:user.profilePic
  })

    }
    catch(err){
      console.log(err);
    console.log("error in signin controller")
      res.status(500).json({
        error:"internal server error"
    })

    }
}