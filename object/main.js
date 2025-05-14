let programmer = {
  name: "John",
  preferredLanguage: "JavaScript",
  writeCode: function () {
    console.log(
      `${this.name} is writing code in ${this.preferredLanguage} code.`
    );
  },

  drinkCoffee() {
    console.log(`${this.name} is drinking coffee.`);
  },
};

function createProgrammer(name, preferredLanguage) {
  return {
    name,
    preferredLanguage,
    writeCode() {
      console.log(
        `${this.name} is writing code in ${this.preferredLanguage} code.`
      );
    },
    drinkCoffee() {
      console.log(`${this.name} is drinking coffee.`);
    },
  };
}

const newProgrammer = createProgrammer("Alice", "Python");

newProgrammer.writeCode(); // Alice is writing code in Python code.

// Call the method
programmer.writeCode(); // John is writing code in JavaScript code.
programmer.drinkCoffee(); // John is drinking coffee.
