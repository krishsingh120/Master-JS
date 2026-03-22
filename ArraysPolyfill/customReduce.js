let arr = [1, 2, 3, 4, 5, 6, 7];

// let resp = arr.reduce((prev, curr, idx, brr) => {
//   return prev + curr;
// }, 100);

// console.log(resp);

Array.prototype.myReduce = function (callback, initialVal) {
  if (typeof callback !== "function") {
    throw new TypeError("Arg1 should be a function");
  }
  // console.log(this);

  if (this.length === 0 && initialVal === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let prev;
  if (initialVal === undefined) {
    prev = this[0];

    for (let i = 1; i < this.length; i++) {
      if (i in this) prev = callback(prev, this[i], i, this);
    }
  } else {
    prev = initialVal;

    for (let i = 0; i < this.length; i++) {
      if (i in this) prev = callback(prev, this[i], i, this);
    }
  }

  return prev;
};

let res = arr.myReduce((prev, curr, index, num) => {
  return prev + curr;
}, 100);

console.log(res);
