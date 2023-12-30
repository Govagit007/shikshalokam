// Given a string s and a number x, print the shortest subStr which start and end with the same character and have lengths greater than or equal to x. If multiple subStr exist with the same shortest length, print them all.

// Eg:

// s: abccdbacca
// 	x: 3		Answer: acca
// x: 4		Answer: acca
// x: 5		Answer: bccdb cdbac
// x: 6 		Answer:  abccdba
// x: 7		Answer: abccdba
// x: 8		Answer: not-found

function findShortestsubStr(s, x) {
  let subStrs = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        let substring = s.substring(i, j + 1);
        let middleStr = substring.substring(1, substring.length - 1);
        if (substring.length >= x && !middleStr.includes(s[i])) {
          subStrs.push(substring);
        }
      }
    }
  }

  if (subStrs.length === 0) {
    console.log("not-found");
  } else {
    let minLength = Math.min(...subStrs.map((sub) => sub.length));
    let shortSubStr = subStrs.filter((sub) => sub.length === minLength);
    shortSubStr.forEach((sub) => {
      console.log(sub + " ");
    });
  }
}

function printShortestsubStr(s, x) {
  console.log("Answer: ");
  findShortestsubStr(s, x);
}

// Example usage
let s = "abccdbacca";

let x = 3;
console.log("x =", x);
printShortestsubStr(s, x);

x = 4;
console.log("\nx =", x);
printShortestsubStr(s, x);

x = 5;
console.log("\nx =", x);
printShortestsubStr(s, x);

x = 6;
console.log("\nx =", x);
printShortestsubStr(s, x);

x = 7;
console.log("\nx =", x);
printShortestsubStr(s, x);

x = 8;
console.log("\nx =", x);
printShortestsubStr(s, x);
