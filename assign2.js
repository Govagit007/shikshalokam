function modifyString(s) {
  let result = [...s];

  let changed = new Array(s.length).fill(false); // To keep track of changed characters

  for (let i = 0; i < s.length; i++) {
    let s = result.join("");
    let ascii = s.charCodeAt(i);

    if (ascii % 2 === 0 && i < s.length - 1 && !changed[i + 1]) {
      let increment = ascii % 7;
      let nextAscii = s.charCodeAt(i + 1);
      let newAscii = nextAscii + increment;
      if (newAscii > 127) {
        newAscii = 83; // Replace with 83 if it's an invalid ASCII value
      }

      result[i + 1] = String.fromCharCode(newAscii);

      changed[i + 1] = true;
    } else if (ascii % 2 !== 0 && i > 0 && !changed[i - 1]) {
      let decrement = ascii % 5;
      let prevAscii = s.charCodeAt(i - 1);
      let newAscii = prevAscii - decrement;
      if (newAscii < 0) {
        newAscii = 83; // Replace with 83 if it's an invalid ASCII value
      }
      result[i - 1] = String.fromCharCode(newAscii);

      changed[i - 1] = true;
    }
  }

  return result.join("");
}

// Example usage:
let inputString = "sHQen}";
let modifiedString = modifyString(inputString);
console.log("Modified String:", modifiedString);
