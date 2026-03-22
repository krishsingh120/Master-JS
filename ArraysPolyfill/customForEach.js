let arr = [1, 2, 3, , 5, 6, 7];

Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // passing thisArg for a binding
      callback.call(thisArg, this[i], i, this);
    }
  }
};

let obj = {
  limit: 2,
  maxLimit: 6,
};

let sum = 0;
arr.myForEach(function (val, index, num) {
  console.log(val, index);
  if (val > this.limit) {
    sum += val;
  }
}, obj);

console.log("Sum is: ", sum);
