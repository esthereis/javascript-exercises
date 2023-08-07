// Create an array of numbers and write a function to find the sum of all elements.

const numbers = [1, 2, 3, 4, 5, 6, 7];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray(numbers));
