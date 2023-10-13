import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();
const app=express();
//1st way
// const MONGO_URL = process.env.URL;
// const connectdb = async (MONGO_URL)=>{
//     try{
        
//         await mongoose.connect(MONGO_URL)
//         console.log("db connected")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// connectdb(MONGO_URL);
// 2nd way
mongoose.connect(process.env.URL)
.then(()=>{
    console.log("connected")
})
.catch(err=>console.log(err))



app.listen(3000,()=>
{
    console.log("server is listening")
});

//not the best practice create by express.Router()
// app.get('/',(req,res)=>{
//     res.json({message:"hello World!"})
// })
app.use('/api/user',userRouter);