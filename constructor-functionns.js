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

const programmer = new Programmer("John", "JavaScript");
programmer.writeCode(); // John is writing code in JavaScript code.