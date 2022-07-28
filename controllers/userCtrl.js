const User = require('../models/user')
const bcrypt = require('bcrypt')


// exports.userCtrl = (req, res) => {
//     res.json({
//         openUsers: [ "User 1", "User 2"]
//     })
// }


let createUser = (req, res) => {
    User.create(req.body, (err, u)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json({u, message: 'New user created'})
    })
}

const login = (req, res)=> {
User.findOne({name: req.body.name}, (err, u)=>{
    if(err){
        res.status(400).json(err)
        return
    }
    if(!u){
res.status(400).json({msg: "Username doesn't exist! Try again!"})
return
    }
    let passwordIsCorrect = bcrypt.compareSync(req.body.password, user.password)
    if(passwordIsCorrect){
        delete user.password
        res.json(u)
    }else{
        res.status(204).json({msg: "Incoreect password! Try again!"})
    }
})
}

module.exports = {
    createUser,
    login
     
}