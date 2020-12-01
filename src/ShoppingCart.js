const Product = require('./Product');

module.exports = class ShoppingCart {
    constructor(taxRate) {
        this.taxRate = taxRate;
        this.items = [];
    }

    addProduct(name, price, quantity) {
        let newProduct = new Product(name, price, quantity);
        this.items.push(newProduct);
    }
    calculateTotal() {
        let total = 0;
        this.items.forEach(item => {
            let cost = item.price * item.quantity
            total += cost
        })
        return Math.round(total * 100) / 100 
    }
    // calculate tax
}



