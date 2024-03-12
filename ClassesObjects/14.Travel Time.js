function solve(array) {

  let obj = {};

  for (const element of array) {

    let [country, town, price] = element.split(" > ");
    price = Number(price);

    if (!obj.hasOwnProperty(country)) {
      obj[country] = {};
    }

    if (!obj[country].hasOwnProperty(town)) {
      obj[country][town] = price;
    } else {
      if (obj[country][town] > price) {
        obj[country][town] = price;
      }
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (const [key, value] of sorted) {
    let sortPrice = Object.entries(value)
      .sort((a, b) => {
        return a[1] - b[1];
      })
      .join(" ");

    console.log(`${key} -> ${sortPrice.replace(/\,/g, " -> ")}`);
  }
  
}
solve([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
