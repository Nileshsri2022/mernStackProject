import  express  from "express";
import mongoose from "mongoose";
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();
const app=express();
//to req a json data as a input
//we use middleware
app.use(express.json());

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



app.listen(4000,()=>
{
    console.log("server is listening")
});

//not the best practice create by express.Router()
// app.get('/',(req,res)=>{
//     res.json({message:"hello World!"})
// })
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


//middleware to handle errors
//to use it in the auth pass next
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message=err.message || 'Internal error message'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});