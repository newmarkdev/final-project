const crypto = require('crypto');
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

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
    },
    transactions: [TransactionSchema]
  });


module.exports = mongoose.model('User', UserSchema);