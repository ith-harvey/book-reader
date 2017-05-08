const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('books').select('*').then( book => {

    res.render('index', { book, title: 'Express' });

  })


});

module.exports = router;
