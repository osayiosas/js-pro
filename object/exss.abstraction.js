function GroceryItem(name, quamtity) {
  this.name = name;
  this.quamtity = quamtity;

  this.display = function () {
    console.log(`${this.name} * ${this.quamtity}`);
  };
}


