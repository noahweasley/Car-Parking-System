import pool from '../db/index.js'
import { Request, Response } from 'express';

const getPark = async (req:Request, res:Response)=>{
    const {park} = req.query
    let data;

    try{
        data = await pool.query(`SELECT * FROM parkingspaces where spaceName = $1`, [park])
        if (data.rowCount > 0) {
            console.log(data.rowCount, 'rowcount')
            return res.status(200).json({
              result: data.rows,
            });
        }
    }catch(err){
          if(err){
            console.log(err)
          }
    }
    res.status(500)
}

export default getPark