import User from '../models/user.model.js'
import bcryptjs from 'bcrypt'
export const signup=async (req,res)=>{
    // create the new user and store in database
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,hashedPassword})
    //to add new user it takes time so add await
    //but you have to make the function async
    
   try{
    await newUser.save();
    res.status.json("User created successfully!!");
   }catch(err){
    console.log(err.message)
   }
    console.log("success");
}