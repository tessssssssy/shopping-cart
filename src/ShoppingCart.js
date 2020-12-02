const Product = require('./Product');

module.exports = class ShoppingCart {
    constructor(taxRate) {
        this.taxRate = taxRate;
        this.items = [];
    }

    // need logic for if the product already exists - increment the quantity
    addProduct(name, price, quantity) {
        let newProduct = new Product(name, price, quantity);
        this.items.push(newProduct);
    }

    // add quantity

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
        return Math.round(total * 100) / 100 
    }

    calculateSalesTax() {
        let total = this.calculateTotal();
        return Math.round(total * (this.taxRate / 100) * 100) / 100;
    }

    calculateFinalTotal() {
        return this.calculateTotal() + this.calculateSalesTax();
    }

}



