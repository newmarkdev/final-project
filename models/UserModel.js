const crypto = require('crypto');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    accessToken: {
      type: String,
      default: () => crypto.randomBytes(128).toString('hex')
    }
  });


module.exports = mongoose.model('User', UserSchema);