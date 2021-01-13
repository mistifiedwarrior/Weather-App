const request = require('request');

const address = process.argv[2];
const token = process.env.ACCESS_TOKEN;
const url = `http://api.weatherstack.com/current?access_key=${token}&query=${address}`;

const foreCastData = function (data) {
  console.log(data.location.name);
  console.log(data.location.lat, '\n', data.location.lon);
};

request({url}, (error, response) => {
  if (error) {
    return console.log('unable to connect to weatherStack server ');
  }
  const data = JSON.parse(response.body);
  if (data.error) {
    return console.log(data.error.info);
  }
  const currentData = `${data.current.weather_descriptions} It is currently ${data.current.temperature} degrees out, and there is ${data.current.precip} % chance of raining `;
  console.log(currentData);
  foreCastData(data);
});
