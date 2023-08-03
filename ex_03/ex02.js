// Given an array of objects with name and age properties, use map to create a new array containing only the names

const people = [
  {
    name: 'Paula',
    age: 12
  },
  {
    name: 'Kaio',
    age: 58
  },
  {
    name: 'Larissa',
    age: 38
  },
  {
    name: 'Leonard',
    age: 9
  },
  {
    name: 'Hanz',
    age: 78
  }
];

const names = people.map(person => person.name);
console.log(names);
