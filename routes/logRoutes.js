const express = require('express');
const router = express.Router();
const logCtrl = require('../controllers/logCtrl')

router.get('/', logCtrl.index)
router.get('/logs/:id', logCtrl.editTask)
router.post('/', logCtrl.createTask)
router.put('/:id', logCtrl.updateTask)
router.delete('/:id', logCtrl.deleteTask)


// router.get('/', (req, res) =>{
//     res.redirect('/logs')
// });

// router.get('/progress/new', function(req, res) {
//     res.render('new');
// })

// router.post('/log', function(req, res) {
//     Task.create(req.body.task, function (err, newTask){
//         if(err) {
//             console.log("Can not CREATE new task err")
//         } else {
//             res.redirect("/logs")
//         }
//     })
// })

// router.put('/logs/:id', function (req,res){
//     Task.findByIdAndUpdate(req.params.id, req.body.task, function(err, updateTask){
//         if(err) {
//             console.log("Can not UPDATE task err")
//         } else {
//             res.redirect("/logs/" + req.params.id)

//         }
//     })
// })

// router.delete('/logs/:id', function(req, res) {
//     Task.findByIdAndRemove(req.params.id, function (err){
//         if(err) {
//             console.log("Can not DELETE task err")
//         } else {
//             res.redirect("/logs")
//         } 
//     })
// })

module.exports = router;