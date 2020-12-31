const fs = require('fs');

const data = fs.readFileSync('1-json.json');
const dataJson = data.toString();
const user = JSON.parse(dataJson);
user.name = 'Anita Gupta';
user.age = 25;
const userJson = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJson);
