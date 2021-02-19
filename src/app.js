const path = require('path');
const express = require('express');
const hbs = require('hbs');
const {getWeatherDetails} = require('./weatherDetails');

const app = express();

const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Aditi',
  });
});

app.get('/weather', getWeatherDetails);

module.exports = app;
