// Create a function that takes an array of numbers and returns a new array with only the even numbers.
let n = [13, 9, 3, 24, 14, 11, 7];

function checkEven(n) {
  let evenArray = [];
  let j = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      evenArray.push(n[i]);
    }
  }
  return evenArray;
}

console.log(checkEven(n));
