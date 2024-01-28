
function card(input) {
  let obj = {};

  for (let index = 0; index < input.length; index++) {
    let [name, deck] = input[index].split(": ");
    
    if (obj.hasOwnProperty(name)) {
      obj[name] += ", " + deck;
    } else {
      obj[name] = deck;
    }
  }

  let newArr = Object.entries(obj);

  let map = new Map();
  let newObj = {};
  
  for (const [key, value] of newArr) {
    let cards = value.split(", ");

    let setValue = new Set();

    cards.forEach((element) => {
      setValue.add(element);
    });
    map.set(key, setValue);
    newObj[key] = setValue;
  }

  let objValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let cards = Object.entries(newObj);
  let finalObj = {};

  for (const [key, value] of cards) {
    finalObj[key] = 0;
    
    value.forEach((element) => {
      let cardValue = [];

      for (let index = 0; index < element.length; index++) {
        
        if (objValues.hasOwnProperty(element[index])) {
          let current = objValues[element[index]];
          cardValue.push(current);
        } else if (element[index] === "1") {
          let current = objValues[10];
          cardValue.push(current);
        }
      }
      let power = cardValue[0] * cardValue[1];
      finalObj[key] += power;
    });
  }

  let result = Object.entries(finalObj);

  for (const [name, value] of result) {
    console.log(`${name}: ${value}`);
  }
}
card([
  "Peter: 2C, 4H, 9H, 4H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);