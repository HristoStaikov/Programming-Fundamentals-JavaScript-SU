function solve(input) {
  
let newStr = "";
  
  for (let index = 0; index < input.length; index++) {
    if (input[index] !== input[index - 1]) {
      newStr += input[index];
    }
  }
  console.log(newStr);
}
solve("aaaaabbbbbcdddeeeedssaa");
solve('qqqwerqwecccwd')
