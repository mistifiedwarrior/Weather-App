const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=fb90918118afe67d007110a860a7892a&query=ballia';

request({url: url}, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
