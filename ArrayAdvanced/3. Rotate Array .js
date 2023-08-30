function solve(input) {
  let rotations = input[input.length - 1];
  let lengthArr = input.length - 1;
  let newArr = [];
  // for (let index = 0; index < rotations; index++) {
  //     const element = input[index];
  // let firstEl = input[index]
  // let lastEl = input[input.length - 2 -index]
  // input[index] = lastEl
  // input[input.length - 2 -index] = firstEl
  // }

  for (let index = 0; index < rotations; index++) {
    let lastElToFirst = input[input.length - 2 - index];
    input.unshift(lastElToFirst);
  }
  input.length = lengthArr;
  console.log(input.join(" "));
}
solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
