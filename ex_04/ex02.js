// Find the top-selling product (product with the highest total quantity sold).

const salesData = require('./exStatement');

function totalProduct(name) {
  return salesData
    .filter(prodct => prodct.product === name)
    .reduce(
      (acc, cur) => ({
        product: name,
        total: acc.total + cur.quantity
      }),
      {
        product: undefined,
        total: 0
      }
    );
}

let totalProdctWidget = totalProduct('Widget');
let totalProdctGadget = totalProduct('Gadget');
let totalProdctDoodad = totalProduct('Doodad');

function findTopSelling(...prodcts) {
  let topSelling = prodcts.reduce(
    (topProdct, curProdct) =>
      curProdct.total > topProdct.total ? curProdct : topProdct,
    { product: undefined, total: 0 }
  );
  return topSelling;
}

console.log(
  findTopSelling(totalProdctWidget, totalProdctGadget, totalProdctDoodad)
);
