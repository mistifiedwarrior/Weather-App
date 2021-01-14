const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=fb90918118afe67d007110a860a7892a&query=Ballia';
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
