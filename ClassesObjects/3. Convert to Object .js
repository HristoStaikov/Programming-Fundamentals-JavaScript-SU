function soleve(jasonStr) {
  let person = JSON.parse(jasonStr);

  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}
soleve('{"name": "George", "age": 40, "town": "Sofia"}');
