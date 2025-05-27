function GroceryItem(name, quantity){
    this.name = name;
    this.quantity = quantity;
    this.display = function () {
        console.log(`${this.name} is ${this.quantity} in stock.`);
    };
}

const newItem = new GroceryItem('apple', 3);
newItem.groceryAisle = 'produce';
console.log(newItem); // { name: 'apple', quantity: 3, groceryAisle: 'produce' }