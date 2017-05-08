
exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1,
          title: 'Wait but why?',
          description: 'Wait But Why (WBW) is a site founded by Tim Urban and Andrew Finn and written and illustrated by Tim Urban. The site covers a range of subjects as a long-form blog. Content has been syndicated on The Huffington Post, Lifehacker, as well as being referenced on other sites. Typical posts involve long form explanations of various topics, including artificial intelligence, outer space, and procrastination using a combination of prose and rough illustrations. - Wikipedia',
          book_url: 'http://waitbutwhy.com/',
          genre: 'horror',
          created_at: new Date(),
          updated_at: new Date()
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));"
      )
    })
};
