function solve(array) {
  let message = array.shift();

  let obj = {
    Move: (n) => {
      message = message.substring(n) + message.substring(0, n);
    },
    Insert: (i, value) => {
      message = message.substring(0, i) + value + message.substring(i);
    },
    ChangeAll: (value, replace) => {
      for (let i = 0; i < message.length; i++) {
        let element = message[i];
        if (element === value) {
          message = message.replace(element, replace);
        }
      }
    },
  };

  for (let index = 0; index < array.length; index++) {
    const command = array[index].split("|");

    if (command[0] == "Move") {
      obj.Move(+command[1]);
    } else if (command[0] == "Insert") {
      obj.Insert(+command[1], command[2]);
    } else if (command[0] == "ChangeAll") {
      obj.ChangeAll(command[1], command[2]);
    } else {
      break;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
