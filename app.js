const request = require('request');

const address = 'Ballia';
const token = process.env.ACCESS_TOKEN;
const url = `http://api.weatherstack.com/current?access_key=${token}&query=${address}`;

request({url}, (error, response) => {
  if (error) {
    console.log('unable to connect to weatherStack server ');
    return;
  }
  const data = JSON.parse(response.body);
  if (data.error) {
    console.log(data.error.info);
    return;
  }
  const currentData = `${data.current.weather_descriptions} It is currently ${data.current.temperature} degrees out, and there is ${data.current.precip} % chance of raining `;
  console.log(currentData);
  console.log(data.location.lat, data.location.lon);
});
