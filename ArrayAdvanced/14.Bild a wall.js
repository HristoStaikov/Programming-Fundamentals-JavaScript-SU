function solve(array) {

  let index = 0;
  let arrLength = array.length;
  let lastIndex = false;

  let cubicYards = [];
  let buffer = 0;

  while (arrLength !== 0) {

    if (array[index] < 30) {
      array[index]++;
      buffer += 195;
    }

    if (array[index] === 30) {
      let section = array.indexOf(array[index]);

      if (section === arrLength - 1) {
        lastIndex = true;
      }

      array.splice(section, 1);
      arrLength = array.length;
      index--;
    }

    if (index === arrLength - 1 || lastIndex) {
      index = -1;
      lastIndex = false;
      cubicYards.push(buffer);
      buffer = 0;
    }

    if (index + 1 <= array.length - 1) {
      index++;
    }

    arrLength = array.length;
  }

  let sumOfCubicYards = cubicYards.reduce((a, b) => a + b);
  console.log(cubicYards.join(", "));
  console.log(`${sumOfCubicYards * 1900} pesos`);
}
solve([21, 25, 28]);
solve([17, 22, 17, 19, 17]);
