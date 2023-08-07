// Create an array of strings and write a function to find the longest string in the array.
const strings = ['ta', 'almond', 'egg', 'chocolate'];

function findBigger(strings) {
  return strings.reduce((longer, current) =>
    longer.length >= current.length ? longer : current
  );
}

console.log(findBigger(strings));
