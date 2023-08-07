// Determine the average price per product.

const salesData = require('./exStatement');

function calculateAverage(name) {
  const productArray = salesData.filter(prodct => prodct.product === name);

  return productArray.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);
}

const widgetName = 'Widget';
const gadgetName = 'Gadget';
const doodadName = 'Doodad';

console.log(
  `The average ${widgetName} price is ${calculateAverage(widgetName)}`
);
console.log(
  `The average ${gadgetName} price is ${calculateAverage(gadgetName)}`
);
console.log(
  `The average ${doodadName} price is ${calculateAverage(doodadName)}`
);
