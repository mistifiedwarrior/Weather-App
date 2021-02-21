const request = require('request');

const getWeatherDetails = (req, res) => {
  const address = req.query.address;
  const token = process.env.ACCESS_TOKEN;
  const url = `http://api.weatherstack.com/current?access_key=${token}&query=${address}`;
  if (!address) {
    return res.send({
      error: 'Please provide the proper address',
    });
  }

  request({url}, (error, response) => {
    if (error) {
      return res.send({error: 'unable to connect to weatherStack server'});
    }
    const data = JSON.parse(response.body);
    if (data.error) {
      return res.send({error: data.error.info});
    }

    res.send(data);
  });
};

module.exports = {getWeatherDetails};
