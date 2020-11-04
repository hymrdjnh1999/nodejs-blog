const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sass = require('node-sass');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});