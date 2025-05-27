function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    // public method

    this.writeCode = function(){
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);    
    }

    // private method
    const drinkCoffee = function() {
        console.log(`${this.name} drinks coffee.`);
    }.bind(this); // bind 'this' to the private method

    // Public method that calls the private method
    this.starDay = function() {
        drinkCoffee();
    }
}

// Creating an instance of the Programmer object
const programmer = new Programmer("Alice", "JavaScript");

programmer.writeCode() // Output: Alice writes JavaScript code.
programmer.starDay()