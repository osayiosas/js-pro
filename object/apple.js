const groceryItem = {
    name: 'apple',
    quantity: 4,

    display() {
        console.log(`${this.name} is ${this.quantity} in stock.`);
    }
};


// Create a new grocery item

function createGroceryItem(name, quantity) {
    return {
        name,
        quantity,
        display() {
            console.log(`${this.name} is ${this.quantity} in stock.`);
        }
    };
}

const newGroceryItem = createGroceryItem('banana', 10);

newGroceryItem.display(); // banana is 10 in stock.

// Call the method
groceryItem.display(); // apple is 4 in stock.
