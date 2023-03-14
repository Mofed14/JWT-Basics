
// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dashboard

const { BadRequest } = require('../errors/index')

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body
    // mongoose validation
    // Joi
    // check in the controller
  
    if (!username || !password) {
        // I use Throw if i use instance of Error
      throw new BadRequest('Please provide email and password')
    }
  
    //just for demo, normally provided by DB!!!!
    const id = new Date().getDate()
  
    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    var token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn:'30d'});

    res.status(200).json({ msg: 'user created', token })
  }
  

const dashboard = async (req, res)=> {
    // console.log(req.user);
    const luckNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello ${req.user.username}`,
        secret: `Here Is Your Authorized Data Your Lucky Number is ${luckNumber}`
    })
}

module.exports = { 
    login,
    dashboard
}