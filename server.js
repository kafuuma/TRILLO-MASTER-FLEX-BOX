// server.js
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function() {
  console.log('Your node js server is running');
});
