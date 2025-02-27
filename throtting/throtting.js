const throtting = (fn, delay) => {
  let myId = null;
  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => {
        myId = null;
      }, delay * 1000);
    }
  };
};

// Usage

const logThrottling = throtting((x) => console.log(x), 2);
logThrottling("anurag dubey"); // log
logThrottling("anurag "); // log
logThrottling("anurag "); // log
logThrottling("anurag "); // log
