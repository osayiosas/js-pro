function example(){
    const num = 5;

   return function logNum(){
        console.log(num);
    }

    
}

const innerfunction = example();
innerfunction(); // Outputs: 5


// This code demonstrates a private method using closures in JavaScript.    
function privateMethod() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log('increment')
        }    
    }
    
}

const { logNum, increment } = privateMethod();
logNum(); // Outputs: 0
increment(); // Outputs: increment
logNum(); // Outputs: 1



// The private method `privateIncrement` is not accessible outside of the returned object,

// using clouser for contructor function, we can create a private method that is not accessible from outside the object.

function Programmer(name, language) {
    //private property

    let preferredLanguage = language;

    // pusblic property
    this.preferredName = name;

    // public method 

    this.writeCode = function() {
        console.log(`${this.preferredName} is writing code in ${preferredLanguage}`);
    };

    // private method
    let drinkCoffee = function() {
        console.log(`${this.preferredName} is drinking coffee`);
    };
    // public method that can access private method
    this.takeBreak = function() {
        drinkCoffee();
        console.log(`${this.preferredName} is taking a break`);
    };
}

const programmer = new Programmer('Alice', 'JavaScript');
programmer.writeCode(); // Outputs: Alice is writing code in JavaScript
programmer.takeBreak(); // Outputs: Alice is drinking coffee
// Outputs: Alice is taking a break