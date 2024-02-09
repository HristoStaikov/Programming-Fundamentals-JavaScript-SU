function solve(pass) {
  let digitCount = 0;
  let passCheck = true;
  let letterOk = true;
  let passLengthCheck = pass.length;

  if (passLengthCheck <= 5 || passLengthCheck >= 10) {
    console.log(`Password must be between 6 and 10 characters`);
    passCheck = false;
  }

  for (let index = 0; index < pass.length; index++) {
    let leterCheck = pass[index].charCodeAt();

    if (leterCheck >= 48 && leterCheck <= 57) {
      digitCount++;
    }

    if (leterCheck < 48) {
      letterOk = false;
      passCheck = false;
    } else if (leterCheck > 57 && leterCheck < 65) {
      letterOk = false;
      passCheck = false;
    } else if (leterCheck > 90 && leterCheck < 97 && leterCheck > 122) {
      letterOk = false;
      passCheck = false;
    }
  }
  if (letterOk === false) {
    console.log(`Password must consist only of letters and digits`);
  }

  if (digitCount < 2) {
    console.log(`Password must have at least 2 digits`);
    passCheck = false;
  }

  if (passCheck) {
    console.log(`Password is valid`);
  }
}
solve("");
