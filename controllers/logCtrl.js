const Task = require('../models/logs')

const index = (req, res) => {
    Task.find({}, (err, tasks) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(tasks)
    })
}

const createTask = async (req, res) => {
    console.log(req.body);

    let newTask = await Task.create(req.body)

    res.json(newTask)
   
}


const deleteTask = (req, res) => {
    let { id } = req.params
    console.log(id)
    //review use of 'id'

    Task.findByIdAndDelete(id, (err, deletedTask) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedTask)
    })
}

const updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, (err, taks)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        Task.fin({}, (error, tasks) =>{
            res.json(tasks)
        })
    })
}
 const editTask = (req, res) =>{
    if(err){
        res.status(400).json(err)
            return
        }
        res.json(tasks)
 }


module.exports = {
    index,
    createTask,
    deleteTask,
    editTask,
    updateTask
}
