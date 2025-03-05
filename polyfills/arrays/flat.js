// Flat method polyfill

if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (depth = 1) {
    console.log(depth);
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && depth > 0) {
        newArray.push(...this[i].myFlat(depth - 1));
      } else {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
}

c;
const arr = [1, 2, 3, [88, 99], [11, 12, 13, [111, 222, [2121, 3131]]]];
const newArr = arr.myFlat(Infinity);
console.log(newArr);
