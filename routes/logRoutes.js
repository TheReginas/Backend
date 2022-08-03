const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const progressCtrl = require('../controllers/progressCtrl')

router.get('/', (req, res) =>{
    res.redirect('/progress')
});

router.get('/progress/new', function(req, res) {
    res.render('new');
})

router.post('/progress', function(req, res) {
    Task.create(req.body.task, function (err, newTask){
        if(err) {
            console.log("Can not CREATE new task err")
        } else {
            res.redirect("/progress")
        }
    })
})

router.put('/progress/:id', function (req,res){
    Task.findByIdAndUpdate(req.params.id, req.body.task, function(err, updateTask){
        if(err) {
            console.log("Can not UPDATE task err")
        } else {
            res.redirect("/progress/" + req.params.id)

        }
    })
})

router.delete('/progress/:id', function(req, res) {
    Task.findByIdAndRemove(req.params.id, function (err){
        if(err) {
            console.log("Can not DELETE task err")
        } else {
            res.redirect("/progress")
        } 
    })
})

module.exports = router;