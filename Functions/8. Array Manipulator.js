function solve(arrOne, arrTwo) {

  let arrCopy = arrOne;
  let commandsArr = arrTwo;

  let obj = {

    add: (arr) => {
      let index = +arr[1];
      let element = +arr[2];

      arrCopy.splice(index, 0, element);
    },
    addMany: (arr) => {

      let indexToAddEls = +arr[1];
      let elementsToAdd = arr.slice(2);

      if (indexToAddEls < 0) {
        return;
      } else if (indexToAddEls == 0) {
        let result = [...elementsToAdd, ...arrCopy];
        arrCopy = result;
      } else if (indexToAddEls > arrCopy.length - 1) {
        let resultBigger = [...arrCopy, ...elementsToAdd];
        arrCopy = resultBigger;
      } else if (indexToAddEls > 0 && indexToAddEls <= arrCopy.length - 1) {
        let elementsBeforeIndex = arrCopy.slice(0, indexToAddEls);
        let elementsLeft = arrCopy.slice(indexToAddEls, arrCopy.length);
        
        const mergeResult = [...elementsBeforeIndex,...elementsToAdd,...elementsLeft,];
        arrCopy = mergeResult;
      }
    },
    contains: (arr) => {

      let el = +arr[1];
      console.log(arrCopy.indexOf(el));
    },
    remove: (arr) => {

      let indexToRemove = +arr[1];
      arrCopy.splice(indexToRemove, 1);
    },
    shift: (arr) => {

      let positions = +arr[1];
      let elementsToAdd = [];
      let elementsToMove = [];

      if (positions > arrCopy.length) {
        let newPosition = positions % arrCopy.length;
        positions = newPosition;
      }

      for (let i = positions; i < arrCopy.length; i++) {
        elementsToAdd[i - positions] = arrCopy[i];
      }

      for (let index = 0; index < positions; index++) {
        elementsToMove[index] = arrCopy[index];
      }

      let result = elementsToAdd.concat(elementsToMove);
      arrCopy = result;
    },
    sumPairs: () => {

      let newArrSumPairs = [];

      for (let num = 0; num < arrCopy.length; num += 2) {
        let numOne = +arrCopy[num];
        let numTwo = +arrCopy[num + 1] || 0;
        let sum = numOne + numTwo;
        newArrSumPairs.push(sum);
      }
      arrCopy = newArrSumPairs;
    },
    print: () => {
      console.log(`[ ${arrCopy.join(", ")} ]`);
    },
  };

  for (let index = 0; index < commandsArr.length; index++) {

    let command = commandsArr[index].split(" ");
    obj[command[0]](command);
    if (command[0] === "print") {
      break;
    }
  }

}
solve([1, 2, 3, 4, 5, 6], ["shift 7", "print"]);
