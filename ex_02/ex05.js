// Create a function that takes an array of numbers and returns a new array with only the even numbers.
const numbers = [13, 9, 3, 24, 14, 11, 7, 1];

const evenNumbers = numbers.filter(number => number % 2 != 0);
console.log(evenNumbers);
