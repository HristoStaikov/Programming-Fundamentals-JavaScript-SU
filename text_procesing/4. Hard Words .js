function solve(text) {
  let letter = text[0];
  let words = text[1];

  while (letter.includes("_")) {
    
    let current = letter.indexOf("_");
    let index = current;
    let command = letter[index];

    while (command === "_") {
      index++;
      command = letter[index];
    }

    let symbolToReplace = letter.substring(current, index);

    for (const el of words) {
      if (el.length === symbolToReplace.length) {
        letter = letter.replace(symbolToReplace, el);
      }
    }
  }

  console.log(letter);
}
solve([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother's ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. Ihope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
