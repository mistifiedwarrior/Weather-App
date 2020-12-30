const http = require('http');

const getData = (url) => {
  return new Promise((resolve) => {
    const request = http.request(url, (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    });
    request.end();
  });
};

module.exports = { getData };
