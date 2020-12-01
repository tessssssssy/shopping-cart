const Product = require('./src/Product');

describe('Product constructor', () => {
    it('constructs product instance with correct attributes', () => {
        const item = new Product('item', 2.99, 5);
        expect(item.name).toBe('item');
        expect(item.price).toBe(2.99);
        expect(item.quantity).toBe(5);
    });
});

