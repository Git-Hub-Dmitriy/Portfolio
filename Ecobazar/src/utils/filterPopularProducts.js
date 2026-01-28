export function filterPopularProducts(array, hot) {
  let outcome = array
    .sort((a, b) => b.counterPurchase - a.counterPurchase)
    .filter((item, i) => i <= 9);
  for (let item of outcome) {
    hot.push(item);
  }
}
