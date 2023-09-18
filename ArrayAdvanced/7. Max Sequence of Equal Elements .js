function solve(arr){
let sequance = 1
let maxSequance = 0
let maxSequanceNum  = 0


for (let index = 0; index < arr.length; index++) {
  if(index !== 0){
let currentNumber = Number (arr[index])
let prevNumber = Number (arr[index-1])

if(currentNumber === prevNumber){
  sequance++
  if(sequance > maxSequance){
    maxSequance = sequance
    maxSequanceNum = currentNumber
  }
}else{sequance = 1}


  }
  
}
console.log(`${(maxSequanceNum + ' ').repeat(maxSequance)}`);
}
solve([1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1]);
