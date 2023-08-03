// Given an array of objects with name and age properties, use filter to create a new array containing only the people aged 30 or above.

const people = [
  {
    name: 'Ana',
    age: 32
  },
  {
    name: 'Felipa',
    age: 17
  },
  {
    name: 'Douglas',
    age: 45
  },
  {
    name: 'John',
    age: 9
  }
];

const people30 = people.filter(person => person.age > 30);
console.log(people30);
