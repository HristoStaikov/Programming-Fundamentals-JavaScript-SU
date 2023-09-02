function solve(arr) {
  let games = [];
  let wordSpit = "";

  for (const char of arr[0]) {
    if (char !== " ") {
      wordSpit += char;
    } else {
      games.push(wordSpit);
      wordSpit = "";
    }
  }
  if (!games.includes(wordSpit)) {
    games.push(wordSpit);
  }

  let index = 1;
  let command = arr[index];

  while (command !== "Play!") {
    
    let buff = [];
    let oneIndex = "";

    for (const el of command) {
      if (el !== " ") {
        oneIndex += el;
      } else {
        buff[0] = oneIndex;
        oneIndex = "";
      }
    }

    buff[1] = oneIndex;

    let token = buff[0];
    let game = buff[1];

    switch (token) {

      case "Install":

        if (!games.includes(game)) {
          games.push(game);
        }
        break;

      case "Uninstall":

        let temporary = [];

        if (games.includes(game)) {
          for (const el of games) {
            if (el !== game) {
              temporary.push(el);
            }
          }
          games = temporary;
        }
        break;

      case "Update":

        let temporaryArr = [];

        if (games.includes(game))
          for (const el of games) {
            if (game !== el) {
              temporaryArr.push(el);
            }
          }
        else {
          break;
        }
        temporaryArr.push(game);
        games = temporaryArr;
        break;

      case "Expansion":

        let expansion = buff[1];
        let checkOne = "";
        let checkTwo = "";
        let checkSeparator = false;

        for (const el of expansion) {
          if (el !== "-" && checkSeparator === false) {
            checkOne += el;
          } else {
            if (el === "-") {
              checkSeparator = true;
              continue;
            }
            checkTwo += el;
          }
        }
        let tempArr = [];

        if (games.includes(checkOne)) {
          for (let index = 0; index < games.length; index++) {
            const element = games[index];
            if (element !== checkOne) {
              tempArr.push(element);
            } else {
              tempArr.push(element);
              let insert = checkOne + ":" + checkTwo;
              tempArr.push(insert);
            }
          }
          games = tempArr;
        }

        break;
    }
    index++;
    command = arr[index];
  }

  console.log(games.join(" "));
}
solve([
  "WoW CS Diablo CS",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion C-Go",
  "Install LoL",
  "Play!",
]);
solve([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
