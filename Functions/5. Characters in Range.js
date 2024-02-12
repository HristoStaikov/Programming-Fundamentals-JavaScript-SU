function ackiiTab(start, end) {
  
  let stringSum = start + end;
  let startChar = stringSum.charCodeAt(0);
  let endChar = stringSum.charCodeAt(1);

  // let startChar = Math.max(start.charCodeAt(), end.charCodeAt());
  // let endChar = Math.min(start.charCodeAt(), end.charCodeAt())

  if (startChar > endChar) {
    let temp = startChar;
    startChar = endChar;
    endChar = temp;
  }

  let result = [];

  for (let index = startChar + 1; index < endChar; index++) {
    result.push(String.fromCharCode(index));
  }
  return result.join(" ");
}
//ackiiTab("a", "d");
console.log(ackiiTab("C", "#"));
