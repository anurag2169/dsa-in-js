function firstnonrepeatingcharacter(str) {
  let n = str.length;

  for (let i = 0; i < n; i++) {
    let found = false;

    for (let j = 0; j < n; j++) {
      if (i !== j && str[i] === str[j]) {
        found = true;
        break;
      }
    }
    if (!found) return str[i];
  }
  return "$";
}

let s = "geeksforgeeks";

console.log(firstnonrepeatingcharacter(s));
