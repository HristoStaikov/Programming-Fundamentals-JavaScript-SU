function solve(input) {

  let initialLoot = input[0].split("|");

  let index = 0;
  let condition = input[index];

  while (condition !== "Yohoho!") {
    let command = condition.split(" ");

    switch (command[0]) {

      case "Loot":

        for (let i = 1; i < command.length; i++) {
          const element = command[i];
          if (!initialLoot.includes(element)) {
            initialLoot.unshift(element);
          }
        }
        break;

      case "Drop":
        let indexToMove = +command[1];

        if (indexToMove >= 0 && indexToMove <= initialLoot.length - 1) {
          let elementToMove = initialLoot.splice(indexToMove, 1);
          initialLoot.push(elementToMove[0]);
        }

        break;

      case "Steal":
        let count = +command[1];

        if (count < initialLoot.length) {
          let lastStolenItems = initialLoot.splice(-count);
          console.log(lastStolenItems.join(", "));
        } else {
          let allStolenItems = initialLoot.slice(0);
          initialLoot = [];
          console.log(allStolenItems.join(", "));
        }

        break;
    }

    index++;
    condition = input[index];
  }

  if (initialLoot.length !== 0) {
    
    let sum = 0;
    initialLoot.forEach((el) => {
      sum += el.length;
    });

    let averageGain = sum / initialLoot.length;
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
  } else {
    console.log(`Failed treasure hunt.`);
  }
}

solve([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
