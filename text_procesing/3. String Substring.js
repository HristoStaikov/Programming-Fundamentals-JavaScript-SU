function solve(word, input) {
  
  let wordSplit = input.split(" ");
  let wordExist = false;

  for (const el of wordSplit) {
    let currentWord = el.toLowerCase();
    
    if (word === currentWord) {
      console.log(`${word}`);
      wordExist = true;
      break;
    }
  }
 
  if (wordExist === false) {
    console.log(`${word} not found!`);
  }
}
solve("javascript", "JavaScript is the best programming language");
