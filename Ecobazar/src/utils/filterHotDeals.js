export function filterHotDeals(products, hot) {
  let array = [];
  products.map((item) => {
    if (item.oldPrice) {
      array.push(item);
    }
  });
  if (array.length < 12) {
    products.map((items) => {
      if (!items.oldPrice) {
        array.push(items);
      }
    });
  }
  let result = array
    .filter((item, i) => i <= 11)
    .sort((a, b) => b.counterPurchase - a.counterPurchase);
  for (let key of result) {
    hot.push(key);
  }
}
