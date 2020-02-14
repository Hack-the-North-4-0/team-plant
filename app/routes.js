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
  res.redirect('/index');
});

router.get('/questions/:pageName', function(req, res) {
  let pageName = req.params.pageName;
  if (pageName === 'END') {
    res.redirect(`/results`);
  } else {
    res.render('question-page', questions[pageName]);
  }
});

router.post('/questions/:pageName', function(req, res) {
    let nextPage = req.params.pageName;
    let answers = req.cookies['careAnswers'];  // get cookies
    if (!answers) {
      answers = {};
    }
    answers[nextPage] = req.body[nextPage];
    console.dir(answers);
    console.log('===================');
    res.cookie('careAnswers', answers);  //set cookie
    res.redirect(`/questions/${questions[nextPage].next}`);


});

router.get('/results', function(req, res) {
  let answers = req.cookies['careAnswers'];  // get cookies
  res.render('results-page', {results: answers});
});

module.exports = router;
