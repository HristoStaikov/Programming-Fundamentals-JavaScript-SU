function palindrome(num) {
  for (let index = 0; index < num.length; index++) {
    let numToStr = num[index].toString();
    let reverseStr = numToStr.split("").reverse().join("");

    if (numToStr === reverseStr) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
}
console.log(palindrome([123, 323, 421, 121]));
//palindrome([32,2,232,1010])
