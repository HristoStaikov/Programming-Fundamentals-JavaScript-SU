function merge(arrOne, arrTwo) {
  let newArr = [];

  for (let index = 0; index < arrOne.length; index++) {
    index % 2 === 1
      ? newArr.push(arrOne[index] + arrTwo[index])
      : newArr.push(+arrOne[index] + +arrTwo[index]);
  }
  console.log(newArr.join(" - "));
}
merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
merge(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
