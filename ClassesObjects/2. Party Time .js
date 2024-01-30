function solve(input) {
  //   let obj = {};

  //   let index = 0;
  //   let list = input[index];

  //   while (list !== "PARTY") {
  //     obj[list] = 1;

  //     let endList = input.length - 1;
  //     let guest = input[endList];

  //     while (guest !== "PARTY") {
  //       if (list === guest) {
  //         delete obj[list];
  //       }

  //       endList--;
  //       guest = input[endList];
  //     }

  //     index++;
  //     list = input[index];
  //   }

  //   let sorted = Object.keys(obj).sort((a, b) => b - a);
  //   console.log(consiled.length);
  //   console.log(consiled.join("\n"));

  let list = input.shift();
  let vip = [];
  let regular = [];

  while (list !== "PARTY") {
    if (isNaN(list[0])) {
      regular.push(list);
    } else {
      vip.push(list);
    }

    list = input.shift();
  }

  let listGuest = vip.concat(regular);

  for (const guest of input) {
    if (listGuest.includes(guest)) {
      listGuest.splice(listGuest.indexOf(guest), 1);
    }
  }
  console.log(listGuest.length);
  console.log(listGuest.join("\n"));
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "9NoBaajQ",
]);
// solve([
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "xys2FYzn",
//   "MDzcM9ZK",
//   "PARTY",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
// ]);
