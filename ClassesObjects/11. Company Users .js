function solve(arr) {
  let obj = {};

  for (const el of arr) {
    let checkId = true;
    let [company, id] = el.split(" -> ");

    if (Object.entries(obj).length > 0) {
      let cuuretValue = id;

      for (const value in obj) {
        if (obj[value] !== cuuretValue) {
            if(value === company){
                obj[value].push(cuuretValue)
                checkId = false
            } 
            }
      }
    }
    if (checkId) {
      obj[company] = [id];
    }
  }

  let result = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of result) {
    console.log(`${key}`);
    for (let index = 0; index < value.length; index++) {
      console.log(`-- ${value[index]}`);
    }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
//   if (obj[value][1] === cuuretValue) {
//     checkId = false
// }else if(value === company){
//     obj[value].push(cuuretValue)
//     checkId = false
// }
