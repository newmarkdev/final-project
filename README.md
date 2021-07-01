# Finance App - MyBudget
Final portfolio project for Technigo code bootcamp June 2021. 

## Problem

## Solution
An MVC approach was taken for the folder structure. More one the frontend and backend structure and frameworks used below. 

## Frontend
Built with and running React, Redux, Browser Router... 

Context API was used to manage the state changes of the budget tool component. 

Material UI was used to style certain elements such as the login form. 

## Backend
Built with and running Node, Express... 

Using the MVC approach the backend folders where structure to divide the Models, Routes and Controller logic separate from the server.js. 

A REST API was created to handle user login/sign up as well as all budget transactions of adding, removing and listing the items. 


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

