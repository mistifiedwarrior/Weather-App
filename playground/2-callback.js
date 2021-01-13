setTimeout(() => {
  console.log('five seconds are up');
}, 5000);

const names = ['aditi', 'Shivi', 'dipali', 'aditya'];
const shortname = names.filter((name) => {
  return name.length <= 8;
});
console.log(shortname);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {latitude: 0, longitude: 0};
    callback(data);
  }, 2000);
};

geocode('Ballia', (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
