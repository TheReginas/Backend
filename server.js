const express = require('express');
const app = express();
const PORT = 6001;
const morgan = require('morgan');

app.get('/', function(req, res) {
    res.send("Connected to Express")
    console.log("Connected to Express")
})

const cors = require('cors')
//require('dotenv').config();
<<<<<<< HEAD
require('./db/connection')
=======
require('./db/connection');
