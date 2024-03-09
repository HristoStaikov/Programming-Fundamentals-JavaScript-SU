function solve(input) {
  let regEx = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;

  let index = 0;
  let command = input[index];
  let moneySpend = 0;

  console.log(`Bought furniture:`);

  while (command !== "Purchase") {
    let valid = regEx.exec(command);

    if (valid) {
      let name = valid.groups["name"];
      moneySpend += +valid.groups["price"] * +valid.groups["quantity"];
      console.log(name);
    }

    index++;
    command = input[index];
  }
  console.log(`Total money spend: ${moneySpend.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
