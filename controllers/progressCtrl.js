exports.progressCtrl = (req, res) => {
    res.json({
        allTasks: ["Task 1", "Task 2", "Final Task" ]
    })
}


const Task = require('../models/progress')

const index = (req, res) => {
    Task.find({}, )
}

async function createTask(req, res){
    console.log(req.body);
    //I want each task to have at least 1  "step" printed
    //when created... 
}

// Edit Task then add steps to that task?
// Is this better as part of a form?

// const addStep = (req, res) => {
//     let { Task.id } = req.params.id
// }

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

module.exports = {
    Task,
    createTask,
    deleteTask,
}
