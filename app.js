const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_TOKEN}&query=ballia`;

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
