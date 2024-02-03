function solve(arrOne, arrTwo) {
  let stock = {};

  for (let index = 0; index < arrOne.length; index += 2) {
    let product = arrOne[index];
    let quantity = Number(arrOne[index + 1]);
    stock[product] = quantity;
  }

  for (let index = 0; index < arrTwo.length; index += 2) {
    let product = arrTwo[index];
    let quantity = Number(arrTwo[index + 1]);

    if (stock.hasOwnProperty(product)) {
      stock[product] += quantity;
    } else {
      stock[product] = quantity;
    }
  }

  for (const key in stock) {
    console.log(`${key} -> ${stock[key]}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
