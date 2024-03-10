function solve(input) {
  let regEx = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g;

  let match = regEx.exec(input);
  let totalIncome = 0;
  
  while (match) {
    
    let name = match.groups["name"];
    let product = match.groups["product"];
    let sumPrice = +match.groups["quantity"] * +match.groups["price"];
    totalIncome += sumPrice;
    
    console.log(`${name}: ${product} - ${sumPrice.toFixed(2)}`);

    match = regEx.exec(input);
  }
  
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
