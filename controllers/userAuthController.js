const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

// User Sign Up for access token 
// Route: POST /signup
exports.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  
  try {
    const salt = bcrypt.genSaltSync();

    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt)
    }).save();

    res.json({
      success: true,
      userID: newUser._id,
      username: newUser.username,
      accessToken: newUser.accessToken
    });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error });
  }
};


// User Login send access token 
// Route: POST /login
exports.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({username});

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true, 
        userID: user._id,
        username: user.username,
        accessToken: user.accessToken
      });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error });
  }
};
