function solve(input) {
    let obj = {};
  
    input.forEach((element) => {
      let command = element.split(", ");
      if (command[0] === "IN") {
        obj[command[1]] = command[0];
      } else if (command[0] === "OUT") {
        delete obj[command[1]];
      }
    });
  
    if (Object.keys(obj).length === 0) {
      console.log(`Parking Lot is Empty`);
    }
  
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  
    for (const el of sorted) {
      console.log(el);
    }
  }
  
  //   solve([
  //     // "OUT, CA2844AA",
  //     // "IN, CA1234TA",
  //     // "IN, CA2844AA",
  //     // "IN, CA2844AA",
  //     // "OUT, CA2844AA",
  
  //   ]);
  solve(["IN, CA2844AA", "IN, CA1234TA", "IN, CA2833AA", "IN, CA1234TA"]);
