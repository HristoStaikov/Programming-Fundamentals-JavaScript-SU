function solve(input) {

  let gladiators = {};
  let index = 0;
  let command = input[index];

  let startIndex = null;

  while (command !== "Ave Cesar") {
    if (command.includes("vs")) {
      startIndex = index;
      break;
    }

    let [gladiator, technique, skill] = command.split(" -> ");
    skill = +skill;

    if (!gladiators.hasOwnProperty(gladiator)) {
      gladiators[gladiator] = [{ technique: technique, skill: skill }];
    } else {
      let existingTechniqueIndex = gladiators[gladiator].findIndex((el) => el.technique === technique);

      if (existingTechniqueIndex !== -1) {
        // Technique already exists for this gladiator
        if (gladiators[gladiator][existingTechniqueIndex].skill < skill) {
          // Update skill if the new skill is greater
          gladiators[gladiator][existingTechniqueIndex].skill = skill;
        }
      } else {
        // Technique does not exist, so add it
        gladiators[gladiator].push({ technique: technique, skill: skill });
      }
    }

    index++;
    command = input[index];
  }

  if (startIndex) {
    let i = startIndex;
    let condition = input[i];

    while (condition !== "Ave Cesar") {
      let [gladiatorOne, gladiatorTwo] = condition.split(" vs ");

      if (gladiators.hasOwnProperty(gladiatorOne) && gladiators.hasOwnProperty(gladiatorTwo)) {
        compare(gladiatorOne, gladiatorTwo);
      }

      i++;
      condition = input[i];
    }

    function compare(one, two) {
        
      let currentPersonOne = gladiators[one];
      let currentPersonTwo = gladiators[two];

      for (const techniqueOne of currentPersonOne) {

        for (const techniqueTwo of currentPersonTwo) {

          if (techniqueTwo.technique == techniqueOne.technique) {

            if (wichWin(currentPersonOne) > wichWin(currentPersonTwo)) {
              //console.log('delete one',two)
              delete gladiators[two];
              return;
            } else {
              //console.log('delete two', currentPersonOne)
              delete gladiators[one];
              return;
            }
          }
        }
      }
    }
  }

  function wichWin(name) {

    let totalSkill = 0;
    for (const key of name) {
      totalSkill += key["skill"];
    }
    return totalSkill;
  }

  for (const obj in gladiators) {
    let sum = wichWin(gladiators[obj]);
    gladiators[obj].unshift(sum);
  }

  let allGladiators = Object.entries(gladiators).sort((a, b) => {
    if (a[1][0] !== b[1][0]) {
      return b[1][0] - a[1][0];
    }

    return a[0].localeCompare(b[0]);
  });

  for (const glad of allGladiators) {
    console.log(`${glad[0]}: ${glad[1][0]} skill`);
    let sortedTechniques = glad[1]
      .slice(1)
      .sort(
        (a, b) => b.skill - a.skill || a.technique.localeCompare(b.technique)
      );
    for (const key of sortedTechniques) {
      console.log(`- ${key.technique} <!> ${key.skill}`);
    }
  }
}
solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
