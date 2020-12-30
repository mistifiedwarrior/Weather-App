const getData = require('./src/app');

const main = async () => {
  const data = await getData('lucknow');
  console.log(data);
};

main();
