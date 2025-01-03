// question 1 - truncate sentence

function truncate(str, maXLength) {
  if (str.length > maXLength) {
    return str.slice(0, maXLength) + "...";
  } else {
    return str;
  }
}
console.log(truncate("Hello World", 5));
