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

const details = {title: 'Weather', name: 'Aditi'};

app.get('/', (_req, res) => {
  res.render('index', details);
});

app.get('/help', (_req, res) => {
  res.render('help', details);
});

app.get('/about', (_req, res) => {
  res.render('about', details);
});

app.get('/weather', getWeatherDetails);

module.exports = app;
