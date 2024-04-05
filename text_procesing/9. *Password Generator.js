function solve(input) {

  let vowels = "AEIOUaeiou";
  let word = input[2].toUpperCase();
  let countCharWord = 0;

  let concatStrings = input[0] + input[1];

  for (let index = 0; index < concatStrings.length; index++) {
    const char = concatStrings[index];

    if (vowels.includes(char)) {
        countCharWord++;

      if (countCharWord <= word.length) {
        let currentCharWord = word.substring(countCharWord - 1, countCharWord);
        concatStrings = concatStrings.replace(char, currentCharWord);
      } else {
        countCharWord = 1;
        let firstCharWord = word.substring(countCharWord - 1, countCharWord);
        concatStrings = concatStrings.replace(char,firstCharWord);
      }
    }
  }

  let password = concatStrings.split("").reverse().join("");
  console.log(`Your generated password is ${password}`);
}

solve(["ilovepizza", "ihatevegetables", "orange"]);

solve(["easymoneyeazylife", "atleasttencharacters", "absolute"]);

solve(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
