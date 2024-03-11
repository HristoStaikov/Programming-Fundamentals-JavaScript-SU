function solve(input) {
  let count = input[0];

  let surched = ["s", "t", "a", "r"];
  let resultCode = [];

  for (let index = 1; index <= count; index++) {
    let currentMesage = input[index];
    let countChar = 0;

    for (const char of currentMesage) {
      let caseInsensitive = char.toLowerCase();

      if (surched.includes(caseInsensitive)) {
        countChar++;
      }
    }
    let buffer = "";

    for (const el of currentMesage) {
      let str = el;

      const result = str.charCodeAt(0);
      let sumOfChar = result - countChar;
      buffer += String.fromCharCode(sumOfChar);
    }

    resultCode.push(buffer);
    buffer = "";
  }

  let regEx =
    /[^@\-!:>]*@(?<planet>[A-Z,a-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<attackType>[D|A])![^@\-!:>]*->(?<soldier>[0-9]+)[^@\-!:>]/g;

  let match = regEx.exec(resultCode);

  let attack = [];
  let destroyed = [];

  while (match) {
    let name = match.groups["planet"];
    let attackType = match.groups["attackType"];
    if (attackType === "D") {
      destroyed.push(name);
    } else {
      attack.push(name);
    }

    match = regEx.exec(resultCode);
  }

  let attackSort = attack.sort((a, b) => a.localeCompare(b));
  let destroyedSort = destroyed.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attack.length}`);
  for (const el of attackSort) {
    console.log(`-> ${el}`);
  }
  console.log(`Destroyed planets: ${destroyed.length}`);
  for (const el of destroyedSort) {
    console.log(`-> ${el}`);
  }
}
solve(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
console.log(`____`);
solve([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
