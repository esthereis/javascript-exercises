// Create an array of strings and write a function to find the longest string in the array.

let strings = ['ta', 'pano', 'egg', 'la'];

function findBigger(strings) {
  let size = 0;
  let longer;

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > size) {
      longer = strings[i];
      size = longer.length;
    }
  }
  return longer;
}

console.log(findBigger(strings));
