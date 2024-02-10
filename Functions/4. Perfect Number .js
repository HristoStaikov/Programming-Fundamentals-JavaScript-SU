function solve(numPerfect) {
  
  let num = numPerfect / 2;
  let devideorsSum = 0;

  for (let index = 1; index < num; index++) {
    if (numPerfect % index === 0) {
      devideorsSum += index;
    }
  }

  if (devideorsSum === num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
solve(1236498);
