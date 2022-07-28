const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const User = require('../../models/user');




router.post('/', userCtrl.createUser)

//added for user login

router.post('/login', userCtrl.login)

//the routes below are not the *focus* of the app, but for functionality
//router.put('/:id', userCtrl.updateUser)

//router.delete('/:id', userCtrl.deleteIt)

module.exports = router;