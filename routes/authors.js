const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('authors').select('*').then( author => {
    res.render('authors', { author, title: 'Authors' });
  })
});

module.exports = router;
