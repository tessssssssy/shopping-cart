const Product = require('./Product');

module.exports = class ShoppingCart {
    constructor(taxRate) {
        this.taxRate = taxRate;
        this.items = [];
    }

    // price input in cents using an integer due to floats producing inaccuracies
    addProduct(name, price) {
        let newProduct = new Product(name, price);
        this.items.push(newProduct);
    }

    addQuantity(name, quantity) {
        let product = this.items.find((item) => item.name === name);
        if (product !== undefined) {
            product.quantity += quantity;
        }
    }

    calculateTotal() {
        let total = 0;
        this.items.forEach(item => {
            let cost = item.price * item.quantity
            total += cost
        })
        return Math.round(total) / 100;
    }

    calculateSalesTax() {
        let total = this.calculateTotal();
        return Math.round(total * (this.taxRate / 100) * 10) / 10;
    }

    calculateFinalTotal() {
        return this.calculateTotal() + this.calculateSalesTax();
    }
}



