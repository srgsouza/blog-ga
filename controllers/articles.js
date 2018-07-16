const express = require('express');
const router = express.Router();
const Article = require('../models/articles');

router.get('/', (req, res) => {
  Article.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('articles/index.ejs', {
        articles:data
      });
    }
  })
});

router.get('/new', (req, res) => {
  res.render('articles/new.ejs');
})

router.get('/:id/edit', (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('articles/edit.ejs', {
        article:data
      });
    }
  })
})

router.get('/:id', (req, res) => {
  // console.log('got in the get:/id show.ejs route');
  
  Article.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('articles/show.ejs', {
        article:data
      })
    }
  })
})

router.post('/', (req, res) => {
  Article.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/articles')
    }
  })
})

router.put('/:id', (req, res) => {
  console.log('got in router.put /:id');
  
  Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/articles');
    }
  })
})

router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/articles');
    }
  })
})
module.exports = router;