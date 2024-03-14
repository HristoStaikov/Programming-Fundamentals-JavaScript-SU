function solve(arr) {

  let barcodes = +arr[0];

  const regEx = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
  const regExNums = /[0-9]+/g;

  for (let index = 1; index <= barcodes; index++) {

    const barcode = arr[index];
    let matched = regEx.exec(barcode);

    if (matched !== null) {
      let digits = barcode.match(regExNums);
      let result = digits ? `Product group: ${digits.join("")}` : `Product group: 00`;
      console.log(result);
    } else {
      console.log("Invalid barcode");
    }
  }

}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("-----");
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
