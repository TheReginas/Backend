const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({

   task :{

        taskName: String,
        description: String,
        teamMember: String,
    }


})



module.exports = mongoose.model('Log', logSchema)