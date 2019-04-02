const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  // .use(express.static(dirname + '/public'))
  .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('index'))
  .get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
  .listen(PORT, () => console.log(`Listening on http://localhost:5000/`));
