const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/blog';
// const url = 'mongodb+srv://ss-user:lxH3y4j7Rdf3k7ir@codeserg-oy22e.mongodb.net/test?retryWrites=true'

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected', (data) => {
  console.log('Connected to MongoDB');
})

db.on('disconnected', (data) => {
  console.log('Disconnected from MongoDB');
})

db.on('error', (err) => {
  console.log(err);
})
