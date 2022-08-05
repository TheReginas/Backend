const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({

   

        task: String,
        workNotes: String,
        teamMember: String
    
    
})

const Task = mongoose.model('Log', logSchema)

module.exports = Task