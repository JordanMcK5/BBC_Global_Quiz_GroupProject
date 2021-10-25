const express = require('express');
const app = express();
const cors =require('cors');
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js');

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true})
.then((client) => {
    const db = client.db('world')
    const countriesCollection = db.collection('countries')
    const countriesRouter = createRouter(countriesCollection)
    const flagsQuizCollection = db.collection('flags-quiz')
    const flagsQuizResultsRouter = createRouter(flagsQuizCollection)
    const capitalsQuizCollection = db.collection('capitals-quiz')
    const capitalsQuizResultsRouter = createRouter(capitalsQuizCollection)
    app.use('/api/countries', countriesRouter)
    app.use('/api/countries/quiz-results/flags', flagsQuizResultsRouter)
    app.use('/api/countries/quiz-results/capitals', capitalsQuizResultsRouter)
})
.catch(console.error)

app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port }`)
});