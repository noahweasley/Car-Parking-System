import pool from '../db/index.js'
import { Request, Response } from 'express'


const getAllparks = async (req:Request, res:Response)=>{
       const {available} = req.params
       console.log(available)
       let parks;
       try{
            if(available === "available"){
              parks = await pool.query(`SELECT * FROM parkingspaces where available > 0`)
            }
            else{
                parks = await pool.query(`SELECT * FROM parkingspaces` )
            }
            res.status(200).json({id:parks.rows[0].spaceid, zone:parks.rows[0].location, area:parks.rows[0].spacename, remain:parks.rows[0].available})
       }catch(err){
        console.log(err)
       }
      return res.status(500)
}

export default getAllparks