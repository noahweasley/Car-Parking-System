"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let arg = process.env.POSTGRES_PORT || "";
let db_port = parseInt(arg);
const pool = new pg_1.Pool({
    connectionString: process.env.CONN
});
exports.default = pool;
