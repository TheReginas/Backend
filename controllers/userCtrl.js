const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET



// exports.userCtrl = (req, res) => {
//     res.json({
//         openUsers: [ "User 1", "User 2"]
//     })
// }


// let createUser = (req, res) => {
//     User.create(req.body, (err, u)=>{
//         if(err){
//             res.status(400).json(err)
//             return
//         }
//         res.json({u, message: 'New user created'})
//     })
// }

// const login = (req, res)=> {
// User.findOne({name: req.body.name}, (err, u)=>{
//     if(err){
//         res.status(400).json(err)
//         return
//     }
//     if(!u){
// res.status(400).json({msg: "Username doesn't exist! Try again!"})
// return
//     }
//     let passwordIsCorrect = bcrypt.compareSync(req.body.password, user.password)
//     if(passwordIsCorrect){
//         delete user.password
//         res.json(u)
//     }else{
//         res.status(204).json({msg: "Incoreect password! Try again!"})
//     }
// })
// }
// JSON WEBTOKEN 

async function signup(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      
      const token = createJWT(user);
        res.json({ token });
      
    } catch (err) {
      
      res.status(400).json(err);
    }
  }
  
  async function login (req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  }

module.exports = {
    //createUser,
    //login
     signup,
     login
}