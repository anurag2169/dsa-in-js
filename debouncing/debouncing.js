function debounce(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("fn should be a function");
  }
  let myId;
  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, args);
    }, delay * 1000);
  };
}

// Usage
const debounced = debounce((x) => console.log(x), 3);


debounced(1); // 1
debounced(2); // 2
debounced(3); // 3
