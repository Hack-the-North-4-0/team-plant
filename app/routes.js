'use strict';

const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.get('/photo-id', function(req, res) {
    let question = {
        text : 'Do you have a photo id?',
        name : 'photo-id',
        next : 'bank-account'
    };
    res.render('question-page', question);
});

router.post('/photo-id', function(req, res) {
    res.redirect('/bank-account');
});

router.get('/bank-account', function(req, res) {
    let question = {
        text : 'Do you have a bank account?',
        name : 'bank-account',
        next : 'nino'
    };
    res.render('question-page', question);
});



module.exports = router;
