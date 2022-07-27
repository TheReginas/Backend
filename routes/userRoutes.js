const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const User = require("../models/user")


router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.signup)


module.exports = router;
