// String Rotations

function rotations(s1, s2) {
  const n = s1.length;

  for (let i = 0; i < n; i++) {
    if (s1 === s2) {
      return true;
    }

    const last = s1[s1.length - 1];
    s1 = last + s1.slice(0, s1.length - 1);
  }
  return false;
}

let s1 = "abcd";
let s2 = "acbd";

console.log(rotations(s1, s2));
