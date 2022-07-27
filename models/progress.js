const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
    task: [],
    //Task: Make a PB&J sandwich
    step: String,
    //Task: [ step1, step2, step3, step4 ]
    complete: Boolean,
    assigned: String,


})

const Task = mongoose.model('Task', progressSchema)

model.exports = Task;