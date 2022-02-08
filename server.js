const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const apiRouter = require('./api/api');
const PORT =process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);

app.listen(PORT, () =>{
    console.log('app running on port 4000')
})

module.exports = app;