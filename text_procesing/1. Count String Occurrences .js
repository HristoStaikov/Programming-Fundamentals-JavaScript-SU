function solve(str, word) {
  let splitted = str.split(" ");
  let count = 0;

  for (let index = 0; index < splitted.length; index++) {
    if (splitted[index] === word) {
      count++;
    }
  }

 console.log(count)
}
solve("This is a word and it also is a sentence", "is");
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
