const ShoppingCart = require('./ShoppingCart');

let cart = new ShoppingCart(10);

console.log(cart.roundTwoDecimals(37.495));

console.log(37.495 * 100)
console.log(Math.round(3749.5) / 100);


