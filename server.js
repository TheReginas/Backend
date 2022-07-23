const express = require('express');
const app = express();
const PORT = 6000;
const morgan = require('morgan');

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})

const cors = require('cors')
require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

