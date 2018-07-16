const mongoose = require('mongoose');

const articleSchema = mongoose.Schema = {
  title: String,
  body: String
}

// const Article = mongoose.model('articles', articleSchema);

// module.exports = Article;

module.exports = mongoose.model('Article', articleSchema);