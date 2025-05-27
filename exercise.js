function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function () {
        console.log(`${this.name} is ${this.quantity} in stock.`);
    };
}

const groceryItem = new GroceryItem('apple', 3);

function calcPrice (groceryItem, price) {
    return groceryItem.quantity * price;
}

const perfomCalc  = calcPrice;
console.log(perfomCalc(groceryItem, 10)); // 8