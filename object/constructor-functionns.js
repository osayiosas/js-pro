// lessonn

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function () {
        console.log(
        `${this.name} is writing code in ${this.preferredLanguage} code.`
        );
    };
    this.drinkCoffee = function () {
        console.log(`${this.name} is drinking coffee.`);
    };
}

// Create a new instance of the Programmer object
let programmer = new Programmer("John", "JavaScript");
// Call the method
programmer.writeCode(); // John is writing code in JavaScript code.
programmer.drinkCoffee(); // John is drinking coffee.
// Create another instance of the Programmer object
let newProgrammer = new Programmer("Alice", "Python");
// Call the method
newProgrammer.writeCode(); // Alice is writing code in Python code.
newProgrammer.drinkCoffee(); // Alice is drinking coffee.
// Call the method
programmer.writeCode(); // John is writing code in JavaScript code.
programmer.drinkCoffee(); // John is drinking coffee.
// Call the method