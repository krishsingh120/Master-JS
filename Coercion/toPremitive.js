const obj = {
  toString() {
    // by default give string of -> "[object object]"
    return 10;  // override this method
  },
  valueOf() {
    // by default it returns same object
  },
};

// question 1
let obj1 = {};
console.log(10 - obj); // obj.valueOf -> object, toString -> [object object] -> final they return string of [obj, obj] -> 10 - "obj, obj" => 10 - NaN = NaN

// question 2
let obj2 = { x: 10, y: 20 };
console.log(100 - obj2); // same NaN, no matter the value of (key: value) pair, matters only toString or valueOf.

// question 3
let obj3 = {
  x: 30,
  valueOf() {
    return 10;
  },
};
console.log(12 - obj3); // output = 2

// question 4
let obj4 = {
  x: 26,
  toString() {
    return "34";
  },
};
console.log(40 - obj4); // output = 6


// question 5
let obj5 = {
  x: 26,
  toString() {
    return {};
  },
};
console.log(40 - obj5); // Type Error
