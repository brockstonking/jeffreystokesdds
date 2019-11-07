const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require('path');

const app = express();

const { PORT, DATABASE_URL, SESSION_SECRET } = process.env;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.use( (req, res, next) => {
  console.log(Date(), req);
  next();
})

// Add the below for routing capability
//app.use(require('./router'));

var server_host = '0.0.0.0';
const port = PORT || 4005

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, "build")
  })
});

app.listen(port, server_host, () => {
    console.log(`Listening on port ${ port }`);
})