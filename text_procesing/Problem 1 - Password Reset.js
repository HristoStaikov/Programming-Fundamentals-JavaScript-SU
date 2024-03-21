function solve(input) {

  let password = input.shift();

  let commandParser = {

    TakeOdd: (string) => {

      let oddChars = string.split("").filter((char, index) => {
        if (index % 2 !== 0) {
          return char;
        }
      });
      return oddChars.join("");
    },

    Cut: (string, startIndex, length) => {

      startIndex = +startIndex;
      length = +length;
      let result = string.substring(0, startIndex) + string.substring(startIndex + length);
      return result;
    },

    Substitute: (string, substring, substitute) => {

      let checkWord = string.includes(substring);

      if (checkWord) {

        while (checkWord) {
          string = string.replace(substring, substitute);
          checkWord = string.includes(substring);
        }
      } else {
        console.log("Nothing to replace!");
        return;
      }
      return string;
    },
  };

  let index = 0;
  let command = input[index];

  while (command !== "Done") {

    let [currentCommand, ...tokens] = command.split(" ");

    let returnResult = commandParser[currentCommand](password, ...tokens);
    if (returnResult) {
      password = returnResult;
      console.log(password);
    }

    index++;
    command = input[index];
  }

  console.log(`Your password is: ${password}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
