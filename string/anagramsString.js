function anagrams(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let one = s.split("").sort().join("");
  let two = t.split("").sort().join("");
  return one === two;
}

console.log(anagrams("anagram", "nagaram"));
console.log(anagrams("dog", "cat"));
