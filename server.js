const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const mongoose = require('mongoose');


dotenv.config({path: './config/config.env'});

connectDB();

//Routes
const transactions = require('./routes/transactions')
const users = require('./routes/user')

// Schemas
const User = require('./models/UserModel');
const TransactionModel = require('./models/Transaction');

const app = express(); 

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Add endpoint for user logged in Transactions 

// Public Budget Transactions API tool
app.use('/api/v1/transactions', transactions);

// User Sign Up and Login
app.use('/user', users);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
