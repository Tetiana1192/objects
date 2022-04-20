const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const productArray = [];
  for (const product of products) {
    if (product[propName]) {
      productArray.push(product[propName]);
    }
  }
  return productArray;
}