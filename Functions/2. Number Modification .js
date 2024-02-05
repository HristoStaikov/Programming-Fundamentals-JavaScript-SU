function numToString(word) {
  return word.toString();
}

function sumOfNumber(num) {
  let number = numToString(num);
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
    let element = Number(number[index]);
    sum += element;
  }
  return sum;
}

function averageSum(params) {
  let numLength = numToString(params);
  let numSum = sumOfNumber(params);
  let resultSum = numSum / numLength.length;
  return resultSum;
}

function checkSum(input) {
  let check = averageSum(input);

  while (check < 5) {
    // Convert input to string and append "9" to it
    input = numToString(input) + "9";

    // Recalculate the average sum
    check = averageSum(input);
  }
  return input;
}

function solve(input) {
  let result = checkSum(input);
  console.log(result);
}

solve(101);
solve(5835);
