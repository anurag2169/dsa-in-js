// call Method Polyfill


function greet() {
  //   console.log(this.animal, "typically sleep between", this.sleepDuration);
  return this.animal + " typically sleep between " + this.sleepDuration;
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

// greet.call(obj); // cats typically sleep between 12 and 16 hours

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

// <-------- POLYFILLS ---------->

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "inValid code");
  }
  context.fnc = this;
  const result = context.fnc(...args);
  delete context.fnc;
  return result;
};

// testing - example

console.log(greet.myCall(obj));
console.log(person.fullName.myCall(person1));
console.log(person.fullName.myCall(person2));
