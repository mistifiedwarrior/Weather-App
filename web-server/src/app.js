const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

// app.get('/help', (req, res) => {
//   res.send([
//     {
//       name: 'Aditi',
//       age: 17,
//     },
//     {
//       name: 'Dipali',
//       age: 14,
//     },
//   ]);
// });

// app.get('/about', (req, res) => {
//   res.send('<h2>About Page</h2>');
// });

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Ballia',
  });
});
app.listen(3000, () => console.log('servers is up on port 3000'));
