const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');


app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());

const apiRouter = require('./api/api');
app.use('/api', apiRouter);


const PORT = process.env.PORT || 4000
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () =>{
    console.log('app running')
})

module.exports = app;