
const person = {
    name: 'Osaigbovo'
};

console.log(person); // { name: 'Osaigbovo' }

person.favoriteFood = 'rice';
console.log(person); // { name: 'Osaigbovo', favoriteFood: 'rice' }

person['favoriteColor'] = 'blue';
console.log(person); // { name: 'Osaigbovo', favoriteFood: 'rice', favoriteColor: 'blue' }

delete person.favoriteColor;
console.log(person); // { name: 'Osaigbovo', favoriteColor: 'blue' }

person.eat = function(){
    console.log(`${this.name} eat ${this.favoriteFood}`);
}

person.eat(); // Osaigbovo is eating undefined



//Excercise


