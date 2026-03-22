let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myFilter = function (cb, thisArg) {
  if (typeof cb !== "function") {
    throw new TypeError("callback must be a function");
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // passing thisArg for a binding
      if (cb.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

let obj = {
  limit: 2,
  maxLimit: 6,
};

let res = arr.myFilter(function (val, index, num) {
  return val >= this.limit && val <= this.maxLimit;
}, obj);

console.log(res);
