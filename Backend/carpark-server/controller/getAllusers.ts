import pool from '../db/index.js'
import { Request, Response } from 'express'


const getAllusers = async (req:Request, res:Response)=>{
       const {available} = req.params
       console.log(available)
       let users;
       try{
              users = await pool.query(`SELECT * FROM users`)
            
            res.status(200).json({pid:users.rows[0].userid, date:users.rows[0].timestamp, name:users.rows[0].username, email:users.rows[0].email, location: users.rows[0].bookedspace})
       }catch(err){
        console.log(err)
       }
      return res.status(500)
}

export default getAllusers