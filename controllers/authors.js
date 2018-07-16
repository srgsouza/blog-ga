const express = require('express');
const router = express.Router();
const Author = require('../models/authors');

router.get('/', (req, res) => {
  Author.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('authors/index.ejs', {
        authors: data
      })
    }
  })  
})

router.get('/new', (req, res) => {
  res.render('authors/new.ejs');
})

router.get('/:id', (req, res) => {
  Author.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('authors/show.ejs', {
        author: data
      })
    }
  })
})

router.post('/', (req, res) => {
  Author.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Created an author');
      res.redirect('/authors');
    }
  })
})

router.delete('/:id', (req, res) => {
  Author.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('TEsting Delete');
      res.redirect('/authors');
    }
  })
})
module.exports = router;