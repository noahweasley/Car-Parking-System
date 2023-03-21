import {Pool} from 'pg';
import dotenv from "dotenv";
dotenv.config();
let arg = process.env.POSTGRES_PORT || ""
let db_port = parseInt(arg);
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASS,
    port: db_port ,
  })

  export default pool;