function solve(input) {

  const regExDamage = /[+]|[-]?[0-9]+[\.][0-9]+|^[+]|[-]?[0-9]+/g;
  const regExHealth = /[^0-9\+\-\*\/\.]+/g;

  const demonsNames = input
  .split(",")
  .map((x) => x.trim());

  let result = [];

  for (let index = 0; index < demonsNames.length; index++) {
    const currentDemon = demonsNames[index];

    let characters = currentDemon.match(regExHealth).join("");
    let numbers = currentDemon.match(regExDamage);
    let symbolsMath = currentDemon.match(/[\*\/]+/g);

    characters = characters
    .split("")
    .reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    if (numbers) {
      numbers = numbers.reduce((acc, num) => {
        return acc + Number(num);
      }, 0);

      if (symbolsMath) {
        symbolsMath = symbolsMath
        .join("")
        .split("");

        for (let i = 0; i < symbolsMath.length; i++) {
          const element = symbolsMath[i];

          if (element == "*") {
            numbers = numbers * 2;
          } else {
            numbers = numbers / 2;
          }
        }
      }
    } else {
      numbers = 0;
    }

    result.push([currentDemon, characters, numbers]);
  }
  result
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((a) =>console.log(`${a[0]} - ${a[1]} health, ${a[2].toFixed(2)} damage`));
}
//solve("Mph-0.5s-0.5t0.0**")
solve("M3p.h1st0.50**, Azazel");
