//Place connections here

const Task = require('../models/progress')

const index = (req, res) => {
    Task.find({}, )
}

async function createTask(req, res){
    console.log(req.body);
    //I want each task to have at least 4 "steps" printed
    //when created, so build that into the  
}

const deleteTask = (req, res) => {
    let { id } = req.params
    console.log(id)
    //review use of 'id'

    createTask.findByIdAndDelete(id, (err, deletedTask) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedTask)
    })
}

