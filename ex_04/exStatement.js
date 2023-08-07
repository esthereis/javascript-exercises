// You're given an array of sales data for a store, where each element in the array is an object representing a sale. Each sale object has the following properties: product (string), quantity (number), and price (number). Your task is to perform various analyses on this data.

// Calculate the total revenue (sum of all sale amounts).
// Find the top-selling product (product with the highest total quantity sold).
// Determine the average price per product.
// Group the sales data by product and create an array of objects where each object contains the product name and the total revenue generated by that product.
// Calculate the total revenue generated by products that have a quantity sold greater than or equal to 10.

const salesData = [
  { product: 'Widget', quantity: 10, price: 25 }, //250
  { product: 'Gadget', quantity: 5, price: 50 }, //250
  { product: 'Widget', quantity: 8, price: 25 }, //200
  { product: 'Doodad', quantity: 15, price: 15 }, //225
  { product: 'Gadget', quantity: 3, price: 50 }, //150
  { product: 'Widget', quantity: 12, price: 25 }, //300
  { product: 'Doodad', quantity: 7, price: 15 }, //105
  { product: 'Gadget', quantity: 10, price: 50 }, //500
  { product: 'Widget', quantity: 5, price: 25 } //125
];

module.exports = salesData;