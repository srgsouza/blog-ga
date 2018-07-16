const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const authorsControler = require('./controllers/authors');
const articlesControler = require('./controllers/articles');
app.use('/authors', authorsControler);
app.use('/articles', articlesControler);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log('App is listening on port ' + port);
})