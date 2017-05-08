const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.distinct('books.id')
  .select('books.title', 'books.genre', 'books.book_url', 'books.description', 'authors.first_name', 'authors.last_name', 'authors.id AS authoring_id')
  .from('books')
  .leftJoin('books_authors','books.id','books_authors.book_id')
  .leftJoin('authors','authors.id','books_authors.author_id')
  .then( books => {
    res.render('books', {books, title: 'Books'});
  }).catch( error => {
    console.log(error);
    next(error)
  })

});

router.delete('/:id', function(req, res, next) {
  return db('books').select('*').del().where({id: req.params.id}).then( book => {
    res.redirect('/books');
  }).catch( error => {
    console.log(error);
    next(error)
  })
});

router.get('/:id', function(req, res, next) {
  return db('books').select('*').where({id: req.params.id}).then( book => {
    book = book[0]
    res.render('books/show', {book, title: 'Books'});
  }).catch( error => {
    console.log(error);
    next(error)
  })
});



router.put('/edit/:id', function(req, res, next) {
  return db('books').select('*').update(req.body).where({id: req.params.id}).then( book => {
    book = book[0]
    res.redirect('/books');
  }).catch( error => {
    console.log(error);
    next(error)
  })
});

router.get('/edit/:id', function(req, res, next) {
  return db('books').select('*').where({id: req.params.id}).then( book => {
    book = book[0]
    res.render('books/edit', {book, title: 'Books'});
  }).catch( error => {
    console.log(error);
    next(error)
  })
});




module.exports = router;
