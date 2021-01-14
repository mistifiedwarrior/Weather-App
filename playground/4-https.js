const http = require('http');
const address = process.argv[2];
const token = process.env.ACCESS_TOKEN;
const url = `http://api.weatherstack.com/current?access_key=${token}&query=${address}`;
const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    console.log(JSON.parse(data));
  });
});

request.on('error', (error) => {
  console.log('an error', error);
});
request.end();
