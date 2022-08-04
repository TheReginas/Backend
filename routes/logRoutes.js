const express = require('express');
const router = express.Router();
const logCtrl = require('../controllers/logCtrl')

router.get('/', logCtrl.index)
router.get('/logs/:id', logCtrl.editTask)
router.post('/', logCtrl.createTask)
router.put('/:id', logCtrl.updateTask)
router.delete('/:id', logCtrl.deleteTask)



module.exports = router;