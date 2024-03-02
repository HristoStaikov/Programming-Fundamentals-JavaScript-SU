function solve(sentence) {
  let result = "" + sentence[0];

  for (let index = 1; index < sentence.length; index++) {
    if (sentence[index].toUpperCase() !== sentence[index]) {
      result += sentence[index];
    } else {
      result += " " + sentence[index];
    }
  }

  console.log(result.split(" ").join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");
