import User from '../models/user.model.js'
import bcryptjs from 'bcrypt'
import { errorHandler } from '../utils/error.js';
export const signup=async (req,res,next)=>{
    // create the new user and store in database
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,hashedPassword})
    //to add new user it takes time so add await
    //but you have to make the function async
    
   try{
    await newUser.save();
    res.status.json("User created successfully!");
   }
   catch(err){
    next(err);
    //this error is created by me

    // next(errorHandler(550,'error from Function'));
   }
    console.log("success");
}