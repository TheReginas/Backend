const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
    task: string,
    //Task: Make a PB&J sandwich
    step: String,
    //Task: [ step1, step2, step3, step4 ]
    complete: Boolean,
    assigned: String


})



module.exports = mongoose.model('Progress', progressSchema)
