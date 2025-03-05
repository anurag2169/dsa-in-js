// Find Method Polyfill
if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (cb) {
    if (typeof cb !== "function") {
      throw new Error("Please Provide Valid Callback Function");
    }

    let lenthValue = this.length;
    let length = Number(lenthValue);

    for (let i = 0; i < length; i++) {
      if (cb(this[i], i, this)) {
        return this[i];
      }
    }

    return undefined;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.find((value, index) => value === 6));
console.log(arr.find((value, index) => value === 7));

console.log(arr.myFind((value, index) => value === 6));
console.log(arr.myFind((value, index) => value === 7));


setTimeout(() => console.log(arr.myFind((value, index) => value === 6)), 3000);
