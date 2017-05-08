const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('authors').select('*').then( author => {
    res.render('authors', { author, title: 'Authors' });
  })
});

router.get('/:id', function(req, res, next) {
  return db('authors').select('*').where({id: req.params.id}).then( author => {
    author = author[0]
    console.log(author);
    res.render('authors/show', {author, title: 'Authors'});
  }).catch( error => {
    console.log(error);
    next(error)
  })
});

router.put('/edit/:id', function(req, res, next) {
  return db('authors').select('*').update(req.body).where({id: req.params.id}).then( author => {
    author = author[0]
    res.redirect('/authors');
  }).catch( error => {
    console.log(error);
    next(error)
  })
});

router.get('/edit/:id', function(req, res, next) {
  return db('authors').select('*').where({id: req.params.id}).then( author => {
    author = author[0]
    res.render('authors/edit', {author, title: 'Books'});
  }).catch( error => {
    console.log(error);
    next(error)
  })
});

router.delete('/:id', function(req, res, next) {
  return db('authors').select('*').del().where({id: req.params.id}).then( book => {
    res.redirect('/authors');
  }).catch( error => {
    console.log(error);
    next(error)
  })
});


module.exports = router;
