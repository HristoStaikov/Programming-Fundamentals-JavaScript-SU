function solve(arr) {
    let big = " ";
  
    for (let index = 0; index < arr.length; index++) {
      let currentIndex = arr[index];
  
      if (arr[arr.length - 1] === Math.max(...arr)) {
        big += arr[arr.length - 1] + " ";
        break;
      }
  
      for (let i = index + 1; i < index + 2; i++) {
        let currentI = arr[i];
  
        if (currentIndex > currentI) {
          big += currentIndex + " ";
        }
      }
  
      if (currentIndex === arr[arr.length - 1]) {
        big += currentIndex + " ";
      }
    }
    console.log(big);
  }solve([1, 4, 3, 2])