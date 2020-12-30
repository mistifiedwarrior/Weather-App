const request = require('./request');

const getData = async (location) => {
  const token = process.env.ACCESS_TOKEN;
  const url = `http://api.weatherstack.com/current?access_key=${token}&query=${location}`;
  const data = await request.getData(url);
  return JSON.parse(data);
};

module.exports = getData;
