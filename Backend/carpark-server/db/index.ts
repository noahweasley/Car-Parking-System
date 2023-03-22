import {Pool} from 'pg';
import dotenv from "dotenv";
dotenv.config();
let arg = process.env.POSTGRES_PORT || ""
let db_port = parseInt(arg);
const pool = new Pool({
    connectionString: process.env.CONN
  })

  export default pool;