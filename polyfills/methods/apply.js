Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(this, "Invalid Function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("arguments are not in array");
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// example 1

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.myApply(person1, ["Oslo", "Norway"]));
