import express from 'express';
import cors from 'cors';
const server =express();

import userRouter from './modules/user/user.route.js';
import productRouter from './modules/product/product.route.js';

server.use(express.json());
server.use(cors()); 

server.use(userRouter);
server.use(productRouter);


server.get('*',(req,res)=>{
    res.json({message:"Invalid URL"})
})
server.listen(3000,()=>{
    console.log("server is running");
})

