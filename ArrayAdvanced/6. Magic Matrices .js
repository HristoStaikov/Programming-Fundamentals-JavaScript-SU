function solve(arr) {
  let magic = true;

  for (let index = 0; index < arr.length; index++) {
    const curentArr = arr[index];

    let curentColSum = 0;
    for (let col = 0; col < arr.length; col++) {
      curentColSum += arr[col][index];
    }

    let curentRowSum = 0;
    for (let row = 0; row < curentArr.length; row++) {
      curentRowSum += curentArr[row];
    }

    if (index < arr.length - 1) {
      for (let i = 0; i < 1; i++) {
        const checkNextArr = arr[index + 1];
        let checkSumRow = 0;

        for (let s = 0; s < checkNextArr.length; s++) {
          checkSumRow += checkNextArr[s];
        }
        if (checkSumRow !== curentRowSum || checkSumRow !== curentColSum) {
          magic = false;
          break;
        }
      }
    }

    if (curentRowSum !== curentColSum) {
      magic = false;
    }
  }

  if (magic) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
