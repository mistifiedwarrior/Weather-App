const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

//defining path for express config:
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../views');

//set up handlebars engines and views location:
app.set('view engine', 'hbs');
app.set('views', viewPath);

//Setup static directory to serve:
app.use(express.static(publicDirectory));

app.get('/view', (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Ballia',
  });
});
app.listen(3000, () => console.log('servers is up on port 3000'));
