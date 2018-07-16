const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));

const authorsControler = require('./controllers/authors');
app.use('/authors', authorsControler);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log('App is listening on port ' + port);
})