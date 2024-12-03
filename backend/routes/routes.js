const express = require('express');
const { addProblem, addAnswer, getAllProblems } = require('../controller/addProblem');
const { signUp, login, verifyToken } = require('../controller/auth');
const { addNotes, getAllNotes } = require('../controller/files');
const { RozerPay, verifyPayments } = require('../controller/Rozerpay');

const Router = express.Router();

Router.post('/addproblem',addProblem);
Router.post('/addanswer',addAnswer);
Router.post('/signup',signUp);
Router.post('/login',login);
Router.post('/addnotes',verifyToken,addNotes)
Router.post('/create-order',RozerPay)
Router.get('/getallproblem',getAllProblems);
Router.post('/verify-payment',verifyPayments)
Router.get('/getnotes',getAllNotes)

module.exports = Router