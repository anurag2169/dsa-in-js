// Filter Method polyfill
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    if (typeof cb !== "function") {
      throw new Error("Please provide Valid callback Function");
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter((element, index, arr) => element % 2 === 0));

console.log(arr.myFilter((element, index, arr) => element % 2 === 1));
