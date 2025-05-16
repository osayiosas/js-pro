function Programmer(name, preferedlanguage) {
    this.name = name;
    this.preferedlanguage = preferedlanguage;

    //public method

    this.writeCode = function(){
        console.log(`${this.name} is writing ${this.preferedlanguage} code`);
        
    }

    //private method

    const drinkCoffee = function() {
        console.log(`${this.name} is drinking coffee.`);
        
    }

    //private method called in public method

    this.startday = function(){
        drinkCoffee();
        
    }
}

const programmer = new Programmer('John', 'JavaScript');
programmer.writeCode();
programmer.drinkCoffee();