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

// functions are objects
// function is an object

function add(num1, num2) {
    return num1 + num2;
}

const n = add;
console.log(n(2, 2) ); // 3
console.log(add.length)

const ProgrammerFun = new Function('name', `
    this.name = name;
    this.writeCode = function () {
        console.log('code in javascript');
    };
    `)

const programmer = new Programmer('John');

programmer.writeCode(); // code in javascript