let arr = [1, 2, 3, 4, 5, 6, 7];
let brr = [8, 9, 10, 11, 12, 13, 14];
let crr = [14, 15, 16, 17, 18, 19, 20, 22];

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let res = arr.myMap((val, index, num) => {
  return val * 5;
});

console.log(res);
