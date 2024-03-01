function solve(arr) {
  let result = "";

  for (let index = arr.length / 2 - 1; index >= 0; index--) {
    result += arr[index];
  }
 
  let start = arr.length / 2;
  let partTwo = arr.substring(start);
  result += "\n"
  
  for (let i = partTwo.length - 1; i >= 0; i--) {
    result += partTwo[i];
  }

  console.log(result);
}
solve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
