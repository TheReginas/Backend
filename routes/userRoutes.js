const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')


router.get('/', userCtrl.index)

router.post('/', userCtrl.create )

//route needed for updating a task?

//the routes below are not the *focus* of the app, but for functionality
router.put('/:id', userCtrl.update)

router.delete('/:id', userCtrl.deleteIt)

module.exports = router