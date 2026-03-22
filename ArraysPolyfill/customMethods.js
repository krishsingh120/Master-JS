let arr = [1, 2, 3, 4, 5, 6, 7];
let brr = [8, 9, 10, 11, 12, 13, 14];
let crr = [14, 15, 16, 17, 18, 19, 20, 22];

Array.prototype.myConcat = function (...arrays) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = this[i];
  }

  for (let arr of arrays) {
    if (Array.isArray(arr)) {
      for (let item of arr) {
        result.push(item);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

let res = arr.myConcat(crr, brr, arr);
console.log(res);
