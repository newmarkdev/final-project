const express = require('express');
const router = express.Router();
const {addUser, loginUser} = require('../controllers/userAuthController')

router
    .route('/signup')
    .post(addUser);

router
    .route('/login')
    .post(loginUser);

module.exports = router; 