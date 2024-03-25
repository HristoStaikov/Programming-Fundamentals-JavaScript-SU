function solve(input) {
  
  const string = input[0];
  const regEx = /([#]|[\|])(?<text>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

  let kcal = 2000;

  let result = [];
  let caloriesTotal = 0;

  let match;

  while ((match = regEx.exec(string)) !== null) {
    let text = match.groups.text;
    let date = match.groups.date;
    let calories = +match.groups.calories;
    result.push([text, date, calories]);

    caloriesTotal += calories;
  }

  let daysLast = Math.floor(caloriesTotal / kcal);
  console.log(`You have food to last you for: ${daysLast} days!`);

  for (const arr of result) {
    console.log(`Item: ${arr[0]}, Best before: ${arr[1]}, Nutrition: ${arr[2]}`);
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("-------------------");
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

//let matches = string.matchAll(regEx);
// let matchesArray = [...string.matchAll(regEx)];

// for (let index = 0; index < matchesArray.length; index++) {
//   const element = matchesArray[index];
//   console.log(element.groups.text);
// }

solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
