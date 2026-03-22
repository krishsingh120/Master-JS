let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.length);

// let resp = arr.splice(3, -1);

// console.log(resp);

Array.prototype.mySplice = function (start, deleteCount) {
  let arr = this;
  let removed = [];

  // handle start (basic)
  if (start < 0) {
    start = arr.length + start;
    if (start < 0) start = 0;
  }

  if (start >= arr.length) return [];

  // handle deleteCount
  if (deleteCount === undefined) {
    deleteCount = arr.length - start;
  }

  deleteCount = Math.max(0, deleteCount);

  // Step 1: collect removed elements
  for (let i = start; i < start + deleteCount && i < arr.length; i++) {
    removed.push(arr[i]);
  }

  // Step 2: shift elements left
  for (let i = start; i < arr.length - deleteCount; i++) {
    arr[i] = arr[i + deleteCount];
  }

  // Step 3: reduce length
  arr.length = arr.length - deleteCount;

  return removed;
};


let res = arr.mySplice(3, 2);

console.log(arr);
console.log(res);
