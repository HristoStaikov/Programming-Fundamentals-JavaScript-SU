function solve(arrOne, arrTwo) {
  let arrtoTake = arrOne.slice(arrOne);
  let specilaNum = arrTwo[0];
  let power = arrTwo[1];
  let sum = 0;

  let locatedSpecialNum = arrtoTake.indexOf(specilaNum);

  while (locatedSpecialNum !== -1) {
    let strtIndex = locatedSpecialNum - power; 
    if(strtIndex < 0){
        strtIndex = 0
    }
    let radius = power + power + 1;
    arrtoTake.splice(strtIndex, radius);
    locatedSpecialNum = arrtoTake.indexOf(
      locatedSpecialNum,
      locatedSpecialNum + 1
    );
  }

  for (const el of arrtoTake) {
    sum += el;
  }

console.log(sum)
}
// solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// solve([1, 7, 7, 1, 2, 3], [7, 1]);
// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
solve([1, 2, 2, 4, 2, 2, 2, 9], [1, 2]);
