let numbers = [1, 2, 3, 4, 5];
for (const element of numbers) {
  console.log(element);
}

const dog = {
    name: 'dog',
    age: 5,
    sound: 'woof',
    eyeColor: 'brown',
}
for (const key in dog) {
    console.log(key);
}
for (const key in dog) {
    console.log(dog[key]);
}

const key = Object.keys(dog);
for (const k of key) {
    console.log(k);
}
const value = Object.values(dog);
for (const v of value) {
    console.log(v);
}
const entries = Object.entries(dog);
for (const [key, value] of entries) {
    console.log(key, value);
}
const map = new Map([
    ['name', 'dog'],
    ['age', 5],
    ['sound', 'woof'],
    ['eyeColor', 'brown'],
]);
for (const [key, value] of map) {
    console.log(key, value);
}
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log(value);
}
const array = [1, 2, 3, 4, 5];
const arrayIterator = array.entries();