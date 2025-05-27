function GroceryItem(name, quantity){
    this.name = name;
    this.quantity = quantity;
    this.display= function(){
        console.log(`${this.name} * ${this.quantity}`);
    }
}

const newItem = new GroceryItem('apple', 10);

for (const key of Object.keys(newItem)) {
    console.log(key);
}

for (const value of Object.values(newItem)) {
    console.log(value);
}
for (const [key, value] of Object.entries(newItem)) {
    console.log(key, value);
}