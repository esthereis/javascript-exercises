// Given an array of numbers, use reduce to calculate the sum of all elements.

const numbers = [2, 4, 5, 8, 13];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
