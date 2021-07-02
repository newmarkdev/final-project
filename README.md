# Finance App - MyBudget
Final portfolio project for Technigo code bootcamp June 2021. 

## Problem
The brief was to build a fullstack MERN app. I chose to build a budget tooling app that solves doing a quick list of income and expenses and totals the balance. 

## Solution
An MVC approach was taken for the folder structure. More on the frontend and backend structure and frameworks used below. 

Future feature addons:
- Custom user budgets
- PWA conversion
- Additional budget catagories filter
- Account Balance tracker

## Frontend
Built with and running React, Redux, Browser Router. 

Context API was used to manage the state changes of the budget tool component. 

Material UI was used to style certain elements such as the login form. Redux was used for user login and token authentication. 

## Backend
Built with Node, Express and MongoDB. Using an MVC approach the backend folders where structured to divide the MongoDB Schemas under a Models folder and the Routes and Controller logic was separated into folders as well to keep the server.js simpler. 

A REST API was created to handle user login/sign up as well as all budget transactions of adding, deleting and listing the items. 

## API Endpoints
Base URL for APIs  
[https://finance-tracker-sn.herokuapp.com/](https://finance-tracker-sn.herokuapp.com/)

## User API
These endpoints allow you to handle User login and signup. 

### POST
/user/signup
<br>
/user/login

## Budget API
These endpoints allow you to handle transactions and fetch a list of budget items. 

### Get
/api/v1/transactions

### POST
/api/v1/transactions

### DELETE
/api/v1/transactions/:id

## Live Site
View here: [MyBudget App](https://finance-tracker-sn.herokuapp.com/)

