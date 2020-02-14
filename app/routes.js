'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const questions = require('./data/question-data.js')

//TODO: Start page
//TODO: Back button
//TODO: Present saved data to outcome page

router.get('/', function(req, res) {
  res.clearCookie("careAnswers");
  res.redirect('/questions/photo-id');
});

router.get('/questions/:pageName', function(req, res) {
    res.render('question-page', questions[req.params.pageName]);
});

router.post('/questions/:pageName', function(req, res) {
    let pageName = req.params.pageName;
    let answers = req.cookies['careAnswers'];  // get cookies
    if (!answers) {
      answers = [];
    }
    answers.push({name: pageName, value: req.body[pageName]});
    console.dir(answers);
    console.log('===================');
    res.cookie('careAnswers', answers);  //set cookie
    res.redirect(`/questions/${questions[pageName].next}`);
});

module.exports = router;
