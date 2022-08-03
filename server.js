const express = require('express');
const app = express();
const PORT = 6001;
const morgan = require('morgan');
const cors = require('cors')

app.get('/', function(req, res) {
    res.send("Connected to Express")
    console.log("Connected to Express")
})

//require('dotenv').config();
<<<<<<< HEAD
require('./db/connection')
=======
require('./db/connection');
<<<<<<< HEAD
=======

//middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/users/", require("./routes/userRoutes.js"));
app.use("/progress/", require('./routes/progressRoutes.js'));


app.get('/api', (req, res)=>{
    res.json({message:"Connected to Express"})
})

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})
>>>>>>> 684fd7b (re sturcture)
