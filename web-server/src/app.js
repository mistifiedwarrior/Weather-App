const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

//defining path for express config:
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//set up handlebars engines and views location:
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve:
app.use(express.static(publicDirectory));

app.get('/view', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Aditi',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about me',
    name: 'Aditi',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'help page',
    name: 'Aditi',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'you must provide an address',
    });
  }
  res.send({
    address: req.query.address,
    forecast: 'Its raining',
    temperature: '55 degrees',
  });
});

app.get('/product', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'you must provide a search term',
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Aditi',
    errorMessage: 'help articles not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Aditi',
    errorMessage: 'Page not found',
  });
});
app.listen(3000, () => console.log('servers is up on port 3000'));
