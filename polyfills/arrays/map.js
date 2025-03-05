// Map polyfill

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    if (typeof cb !== "function") {
      throw new Error("Please provide Valid Callback function");
    }
    let retrunArray = [];

    for (let i = 0; i < this.length; i++) {
      retrunArray.push(cb(this[i], i, this));
    }

    return retrunArray;
  };
}

const arr = [1, 2, 3, 4];

const newArr = arr.map((element, index) => element * 2);
console.log(newArr);

const newArr2 = arr.myMap((ele, index, arr) => {
  return ele * 2;
});
console.log(newArr2);
