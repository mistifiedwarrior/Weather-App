// object property shorthand
const name = 'Aditi';
const age = 17;
const user = {
  name,
  age,
  location: 'Ballia',
};

console.log(user);

// object destructuring
const product = {
  label: 'Red notebook',
  price: 5,
  stock: 205,
  salePrice: undefined,
};
// const label = product.label
// const stock = product.stock

// const {label: productLabel, price, stock, rating = 10} = product;
// console.log(productLabel, price, stock, rating);

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock);
};
transaction('order', product);
