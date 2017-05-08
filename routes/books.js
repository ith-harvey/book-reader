const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('books').select('*').then( book => {
    res.render('books', { book, title: 'Books' });
  })
});

module.exports = router;
