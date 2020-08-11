const productData = [
  {
    productId: 1000,
    productName: 'Product 1000',
  },
  {
    productId: 1001,
    productName: 'Product 1001',
  },
];

const stockData = [
  {
    productId: 1000,
    locationId: 1,
    stock: 21,
  },
  {
    productId: 1000,
    locationId: 2,
    stock: 8,
  },
  {
    productId: 1001,
    locationId: 1,
    stock: 4,
  },
  {
    productId: 1001,
    locationId: 2,
    stock: 10,
  },
];

const locationData = [
  {
    locationId: 1,
    locationName: 'Location 1',
  },
  {
    locationId: 2,
    locationName: 'Location 2',
  },
];

function result() {
  let result = [];

  for (i = 0; i < productData.length; i++) {
    let detail = [];
    let total = 0;

    for (j = 0; j < stockData.length; j++) {
      if (productData[i].productId === stockData[j].productId) {
        for (k = 0; k < locationData.length; k++) {
          if (locationData[k].locationId === stockData[j].locationId) {
            detail.push({
              locationName: locationData[k].locationName,
              stock: stockData[j].stock,
            });
          }
        }
        total += stockData[j].stock;
      }
    }

    result.push({
      productName: productData[i].productName,
      stock: {
        total,
        detail,
      },
    });
  }

  return result;
}

console.log(JSON.stringify(result()));
