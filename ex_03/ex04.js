// Given an array of numbers, use filter to create a new array containing only the even numbers.

const numbers = [2, 4, 5, 8, 13, 55, 33, 1];

const even = numbers.filter(number => number % 2 != 0);
console.log(even);
