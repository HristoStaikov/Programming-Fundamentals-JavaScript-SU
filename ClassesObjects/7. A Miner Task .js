function solve(arr) {
  let obj = {};

  for (let index = 0; index < arr.length; index += 2) {
    let resurse = arr[index];
    let quantity = Number(arr[index + 1]);

    if (!obj.hasOwnProperty(resurse)) {
      if (index % 2 === 0) {
        obj[arr[index]] = quantity;
      } else {
        obj[arr[index - 1]] = resurse;
      }
    } else {
      obj[resurse] += quantity;
    }
  }
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
solve(["Gold", "155", "Gold", "155", "Silver", "10", "Copper", "17"]);
