// Create an array of numbers and write a function to find the sum of all elements.

const numbers = [1, 2, 3, 4, 5, 6, 7];

function sumArray(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray(numbers));
