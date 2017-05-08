const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('inside of books');
  return db.select('books.id', 'books.title', 'books.genre', 'books.description', 'authors.first_name', 'authors.last_name', 'authors.id AS authoring_id')
  .from('books')
  .innerJoin('books_authors','books.id','books_authors.book_id')
  .innerJoin('authors','books_authors.author_id','authors.id')
  .then( books => {
    console.log('in books');
    res.render('books', { books, title: 'Books' });
  }).catch( error => {
    console.log(error);
    next(error)
  })

});

module.exports = router;
