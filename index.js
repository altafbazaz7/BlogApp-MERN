import express from 'express';
const app = express();
import dotenv from 'dotenv';
import routes from './routers/routes.js';
import cors from 'cors'
import mongoose from "mongoose"
const  port = process.env.PORT || 8000;
dotenv.config();


const URL = process.env.MONGO_URL;
const connection = async() => {
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('Database connected successfully');
    }catch(err){
         console.log('Error while connecting to Mongo', err)
    }
}

connection()

app.use(express.json());
app.use(cors())
app.use('/', routes)




app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})