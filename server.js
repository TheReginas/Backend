const express = require('express');
const app = express();
const PORT = normalizePort(process.env.PORT || '6000');
app.set('port', port);
const morgan = require('morgan');

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})

app.get('/', function(req, res) {
    res.send("Connected to Express")
    console.log("Connected to Express")
})

const cors = require('cors')
require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users/", require("./routes/userRoutes"))
app.use("/progress/", require("./routes/progressRoutes"))