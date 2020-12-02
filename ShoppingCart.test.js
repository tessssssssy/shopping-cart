const ShoppingCart = require('./src/ShoppingCart');
const Product = require('./src/Product');

describe('ShoppingCart constructor', () => {
  it('constructs ShoppingCart instance with correct attributes', () => {
    const cart = new ShoppingCart(10);
    expect(cart.items).toEqual([]);
    expect(cart.taxRate).toEqual(10);
  });
});

describe('addProduct', () => {
  it('creates a product instance', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 49.99, 5);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('creates a product with the correct attributes', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 49.99, 5);
    expect(cart.items[0].name).toEqual('Shower Gel');
    expect(cart.items[0].price).toEqual(49.99);
    expect(cart.items[0].quantity).toEqual(5);
  });
});

describe('calculateTotal', () => {
  it('calculates the total cost before sales tax', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 49.99, 5);
    expect(cart.calculateTotal()).toEqual(249.95)
  });
});

describe('calculateSalesTax', () => {
  it('calculates the sales tax to be added', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 49.99, 5);
    expect(cart.calculateSalesTax()).toEqual(25)
  });
});

describe('calculateFinalTotal', () => {
  it('calculates the final total after adding sales tax', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 49.99, 5);
    expect(cart.calculateFinalTotal()).toEqual(274.95)
  });
});

// Step 1

describe('Step 1: Add products to shopping cart', () => {
  const cart = new ShoppingCart();
  it('add a product Shower Gel with a unit price of 49.99', () => {
    cart.addProduct('Shower Gel', 49.99, 0);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('user adds 5 shower gels to the shopping cart', () => {
    expect(() => cart.addQuantity('hello', 49.99, 10)).not.toThrow()
  });
});

