const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
    task: [],
    //Task: Make a PB&J sandwich
    step: String,
    //Task: [ step1, step2, step3, step4 ]
    complete: Boolean,
    assigned: String,


})

//const Task = mongoose.model('Progress', progressSchema)
//CREATE progressSchema.Task[]

module.exports = mongoose.model('Progress', progressSchema)
