let arr = [1, 2, [3, 4], 7, , [10, 11, [12, 23]]];

// Recursive
Array.prototype.myFlatRecursive = function (depth = 1) {
  if (typeof depth !== "number") {
    throw new TypeError("Depth should be a Integer Number");
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (Array.isArray(this[i]) && depth > 0) {
        result.push(...this[i].myFlatRecursive(depth - 1));
      } else {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// let res = arr.myFlatRecursive(2);
// console.log(res);

/**
  1. Stack me [value, depth]
  2. Pop karo
  3. Array hai + depth > 0 → tod do
  4. Else → push inside the result
  5. End me reverse
*/

Array.prototype.myFlatIterative = function (depth = 1) {
  depth = Math.floor(depth);
  if (depth < 0) depth = 0;

  let stack = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      stack.push([this[i], depth]);
    }
  }


  let result = [];

  while (stack.length) {
    let [curr, d] = stack.pop();

    if (Array.isArray(curr) && d > 0) {
      for (let i = curr.length - 1; i >= 0; i--) {
        if (i in curr) {
          stack.push([curr[i], d - 1]);
        }
      }
    } else {
      result.push(curr);
    }
  }

  return result.reverse();
};

let res = arr.myFlatIterative(Infinity);
console.log(res);
