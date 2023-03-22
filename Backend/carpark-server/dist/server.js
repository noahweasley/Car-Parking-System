"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/index.js');
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.get('/', (req, res) => {
    res.status(200).send('welcome to home page');
});
app.listen(process.env.PORT, () => console.log('server running' + process.env.PORT));
