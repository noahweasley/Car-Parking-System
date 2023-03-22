import express from 'express';
import { Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
const app = express();
dotenv.config()


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', routes);
app.get('/',(req:Request,res:Response)=>{
    res.status(200).send('welcome to home page')
})
app.listen(process.env.PORT, ()=> console.log('server running' + process.env.PORT))
