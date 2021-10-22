const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('world');
  const countriesCollection = db.collection('countries');
  const countriesRouter = createRouter(countriesCollection)
  app.use('/api/countries', countriesRouter);

  app.listen(5000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
