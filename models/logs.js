const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({

   task :{

        task: String,
        workNotes: String,
        teamMember: String,
    }


})



module.exports = mongoose.model('Log', logSchema)