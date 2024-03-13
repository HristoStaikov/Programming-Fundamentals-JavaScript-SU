function solve(input) {

  let towns = {};

  for (let index = 0; index < input.length; index++) {
    let currentObj = input[index];

    if (!towns.hasOwnProperty(currentObj.town)) {
      towns[currentObj.town] = [0,{ [currentObj.model]: currentObj.regNumber, price: currentObj.price }];
      towns[currentObj.town][0] += currentObj.price;
    } else {
      towns[currentObj.town].push({ [currentObj.model]: currentObj.regNumber,price: currentObj.price });
      towns[currentObj.town][0] += currentObj.price;
    }
  }

  let townsMostProfitable = Object.entries(towns).sort((a, b) => {
    // Compare by profit (most profitable)
    if (a[1][0] !== b[1][0]) {
      return b[1][0] - a[1][0];
    }

    // If profits are equal, compare by the number of models
    if (a[1].length !== b[1].length) {
      return a[1].length - b[1].length;
    }

    // If profits and model counts are equal, compare by town name (ascending order)
    return a[0].localeCompare(b[0]);
  });

  let models = {};

  let priceMostExpensiveTown = townsMostProfitable[0][1].shift();

  for (const el of townsMostProfitable[0][1]) {
    let element = Object.entries(el);

    if (!models.hasOwnProperty(element[0][0])) {
      models[element[0][0]] = [element[1][1]];
    } else {
      models[element[0][0]].push(element[1][1]);
    }
  }

  let mostDrivenModel = Object
  .entries(models)
  .sort((a, b) => {
    let first = Math.max(...a[1]);
    let second = Math.max(...b[1]);
    //Compare by most driven models
    if (a[1].length !== b[1].length) {
      return b[1] - a[1];
    }
    // If it has two most driven models, compare by most expensive vignette
    if (first !== second) {
      return second - first;
    }
    // If it has two most expensive models and it has two most driven models sort by model in ascending order
    return a[0].localeCompare(b[0]);
  });

  let result = {};

  for (const obj of input) {

    if (obj.model == mostDrivenModel[0][0]) {
      if (!result.hasOwnProperty(obj.town)) {
        result[obj.town] = [obj.regNumber];
      } else {
        result[obj.town].push(obj.regNumber);
      }
    }
  }
  let sortedResult = Object
  .entries(result)
  .sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`${townsMostProfitable[0][0]} is most profitable - ${priceMostExpensiveTown} BGN`);
  console.log(`Most driven model: ${mostDrivenModel[0][0]}`);

  for (const arr of sortedResult) {
    console.log(`${arr[0]}: ${arr[1].join(", ")}`);
  }

}
solve([
  { model: "BMW", regNumber: "B1234SM", town: "Varna", price: 2 },
  { model: "BMW", regNumber: "C5959CZ", town: "Sofia", price: 8 },
  { model: "Tesla", regNumber: "NIKOLA", town: "Burgas", price: 9 },
  { model: "BMW", regNumber: "A3423SM", town: "Varna", price: 3 },
  { model: "Lada", regNumber: "SJSCA", town: "Sofia", price: 3 },
]);
