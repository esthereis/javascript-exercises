// Calculate the total revenue (sum of all sale amounts).

const salesData = require('./exStatement');

const revenue = salesData.reduce(
  (sum, prodct) => sum + prodct.price * prodct.quantity,
  0
);
console.log(revenue);
