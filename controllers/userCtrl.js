const User = require('../models/user');
const bcrypt = require('bcrypt')


const login = (req, res) => {
  User.findOne ({name: req.body.name}, (err, user)=> {
    if (err){
    res.status(400).json(err)
    return
  } 
    if (err){
      res.status(400).json({ msg: 'Username isnt valid '})
      return
    }
    if (bcrypt.compareSync(req.body.password, user.password)){
      delete user.password
      res.json(user)

    }else{
      res.status(204).json({msg: 'Password isnt invalid'})
    }

  })
}










module.exports = {
  //signup,
  login
}


function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}
