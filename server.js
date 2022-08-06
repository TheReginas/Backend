const express = require('express');
const app = express();
const PORT = 6001;
const morgan = require('morgan');
const cors = require('cors')

app.get('/', function(req, res) {
    res.send("Connected to Express")
    console.log("Connected to Express")
})


require('dotenv').config();
require('./db/connection');

//middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/users", require("./routes/userRoutes.js"));
app.use("/logs", require('./routes/logRoutes.js'));


app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})
