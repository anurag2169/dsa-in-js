Function.prototype.myBindWithClosure = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Function");
  }

  let fnc = this; //store the reference of original function.

  return function (...agrs2) {
    context.tempFn = fnc; // Manually set `this` by attaching function to `context`

    const result = context.tempFn(...args, ...agrs2); // Execute function and store result
    delete context.tempFn; // Remove temp function to avoid modifying the object
    return result;
  };
};

Function.prototype.myBindWithApply = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Function");
  }

  let fnc = this;
  return function (...newAgrs) {
    return fnc.apply(context, [...args, ...newAgrs]);
  };
};

//   example 1

function greet() {
  return this.animal + " typically sleep between " + this.sleepDuration;
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

const res = greet.myBindWithClosure(obj);
console.log(res());

// example 2

function greeting(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

const boundGreet = greeting.myBindWithClosure(person, "Hello from");
console.log(boundGreet("!")); // Output: "Hello, Alice!"
