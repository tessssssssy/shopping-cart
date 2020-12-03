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
    cart.addProduct('Shower Gel', 4999, 5);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('creates a product with the correct attributes', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    expect(cart.items[0].name).toEqual('Shower Gel');
    expect(cart.items[0].price).toEqual(4999);
    expect(cart.items[0].quantity).toEqual(5);
  });
});

describe('addQuantity', () => {
  it('adds extra quantity to existing product', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    cart.addQuantity('Shower Gel', 5);
    expect(cart.items[0].quantity).toEqual(10);
  });

  it('Does not try to add quantity if product does not exist', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    expect(() => cart.addQuantity('Cat', 1)).not.toThrow()
  });
});

describe('calculateTotal', () => {
  it('calculates the total cost before sales tax', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    expect(cart.calculateTotal()).toEqual(249.95)
  });
});

describe('calculateSalesTax', () => {
  it('calculates the sales tax to be added', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    expect(cart.calculateSalesTax()).toEqual(25)
  });
});

describe('calculateFinalTotal', () => {
  it('calculates the final total after adding sales tax', () => {
    const cart = new ShoppingCart(10);
    cart.addProduct('Shower Gel', 4999, 5);
    expect(cart.calculateFinalTotal()).toEqual(274.95)
  });
});


// Step 1

describe('Step 1: Add products to shopping cart', () => {
  const cart = new ShoppingCart();
  it('add a product Shower Gel with a unit price of 49.99', () => {
    cart.addProduct('Shower Gel', 4999, 0);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('user adds 5 shower gels to the shopping cart', () => {
    cart.addQuantity('Shower Gel', 5);
    expect(cart.items[0].quantity).toEqual(5)
  });

  it('The shopping carts total price should equal', () => {
    expect(cart.calculateTotal()).toEqual(249.95)
  });

});


// Step 2

describe('Step 2: Add additional products of the same type to the shopping cart', () => {
  const cart = new ShoppingCart();
  it('add a product Shower Gel with a unit price of 49.99', () => {
    cart.addProduct('Shower Gel', 4999, 0);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('user adds 5 shower gels to the shopping cart', () => {
    cart.addQuantity('Shower Gel', 5);
    expect(cart.items[0].quantity).toEqual(5)
  });

  it('user adds another 3 shower gels to the shopping cart', () => {
    cart.addQuantity('Shower Gel', 3);
    expect(cart.items[0].quantity).toEqual(8)
  });

  it('The shopping carts total price should equal 399.92', () => {
    expect(cart.calculateTotal()).toEqual(399.92)
  });
});

// Step 3

describe('Step 3: Calculate the tax rate of the shopping cart with multiple items', () => {
  const cart = new ShoppingCart(12.5);
  it('add a product Shower Gel with a unit price of 49.99', () => {
    cart.addProduct('Shower Gel', 4999, 0);
    expect(cart.items[0]).toBeInstanceOf(Product);
  });

  it('add another product Deoderant with a unit price of 99.99', () => {
    cart.addProduct('Deoderant', 9999, 0);
    expect(cart.items[1]).toBeInstanceOf(Product);
  });

  it('user adds 2 Shower Gels to the shopping cart', () => {
    cart.addQuantity('Shower Gel', 2);
    expect(cart.items[0].quantity).toEqual(2)
  });

  it('user adds 2 Deoderants to the shopping cart', () => {
    cart.addQuantity('Deoderant', 2);
    expect(cart.items[1].quantity).toEqual(2)
  });

  it('The cart should contain 2 Shower Gels with a unit price of 49.99', () => {
    expect(cart.items[0].quantity).toEqual(2)
    expect(cart.items[0].price).toEqual(4999)
  });

  it('The cart should contain 2 Deoderants with a unit price of 99.99', () => {
    expect(cart.items[1].quantity).toEqual(2)
    expect(cart.items[1].price).toEqual(9999)
    expect(cart.calculateTotal()).toEqual(299.96)
  });

  it('The total sales tax for the shopping cart should equal 37.50', () => {
    expect(cart.calculateSalesTax()).toEqual(37.50)
  });

  it('The shopping carts total price including sales tax should equal 337.46', () => {
    expect(cart.calculateFinalTotal()).toEqual(337.46)
  });
});