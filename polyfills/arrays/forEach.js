// forEach polyfill

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    if (typeof callback !== "function") {
      throw new Error("Please provide Callback Function properly");
    }
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

const arr = [1, 2, 3, 4];

arr.forEach((element, index) =>
  console.log(`For Each Element ${element} at Index ${index}`)
);

arr.myForEach((element, index) =>
  console.log(`My For Each Element ${element * 2} at Index ${index}`)
);
