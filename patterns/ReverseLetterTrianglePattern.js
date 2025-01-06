// Pattern-15: Reverse Letter Triangle Pattern

// Input Format: N = 3
// Result:
// A B C
// A B
// A

// Input Format: N = 6
// Result:
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

function reverseLetterTringlePattern(n) {
  for (let i = n; i >= 0; i--) {
    let currentCharCode = 65;
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += String.fromCharCode(currentCharCode) + " ";
      currentCharCode++;
    }
    console.log(pattern);
  }
}

reverseLetterTringlePattern(6);
