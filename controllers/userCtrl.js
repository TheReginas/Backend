exports.userCtrl = (req, res) => {
    res.json({
        openUsers: [ "User 1", "User 2"]
    })
}

const User = require('../models/user')

let createUser = (req, res) => {
    User.create(req.body, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json({u, message: 'New user created'})
    })
}

module.exports = {
    createUser
}