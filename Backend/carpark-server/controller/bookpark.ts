import {Request, Response} from 'express';
import pool from '../db/index.js';

const bookpark = async(req:Request, res:Response)=>{
    const {id, park, username} = req.query
    const date:string = new Date().toLocaleString();
    console.log(id)
    let data1,data2;
    try{
        data1 = await pool.query(`INSERT INTO users(username, email, bookedSpace, timestamp) VALUES($1,$2,$3,$4)`,[ username, id, park, date ])
        data2 = await pool.query(`UPDATE parkingspaces SET available = available - 1 WHERE spacename = $1 AND available > 1`,[park])
        console.log(data1)
        console.log(data2)
        return res.status(204).json({result:'success'});
    }catch(err){
        if(err){
            console.log(err)
    }
}
return res.status(500)
}
export default bookpark