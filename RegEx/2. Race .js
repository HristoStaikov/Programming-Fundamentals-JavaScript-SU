function solve(input) {
//   let names = input.shift().split(", ");
//   let index = 0;
//   let command = input[index];

//   let regName = /[a-zA-Z]+/g;
//   let regDistance = /\d+/g;

//   let obj = {};
  
//   while (command !== "end of race") {
    
//     let name = command.match(regName).join("");
//     let distance = command.match(regDistance).join("");
    
//     let distanceSum = distance
//       .split("")
//       .reduce((sum, digit) => sum + parseInt(digit), 0);

//     if (names.includes(name)) {
//       if (!obj.hasOwnProperty(name)) {
//         obj[name] = distanceSum;
//       } else {
//         obj[name] += distanceSum;
//       }
//     }
//     index++;
//     command = input[index];
//   }

//   let firstThree = Object.entries(obj).sort((a, b) => b[1] - a[1]);

//   console.log(`1st place: ${firstThree[0][0]}`);
//   console.log(`2nd place: ${firstThree[1][0]}`);
//   console.log(`3rd place: ${firstThree[2][0]}`);
// }
let listNames = input.shift().split(", ");
let regName = /[a-zA-Z]+/g;
let regDistance = /[0-9]/g;

let currentEl = input.shift()
let obj = {}

for (const name of listNames) {
  obj[name] = 0
}

while (currentEl !== "end of race") {
  
let currentNames = currentEl.match(regName).join("")
let distance = currentEl.match(regDistance)

let sumDistance = 0
distance.map(d => sumDistance += Number (d))
if(obj.hasOwnProperty(currentNames)){
  obj[currentNames] += sumDistance
}

currentEl = input.shift()
}
console.log(obj);
}
solve([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
