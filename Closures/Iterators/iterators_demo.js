// custom iterator
function fetchNextElement(arr) {
  let idx = 0;
  function next() {
    if (idx == arr.length) return { value: undefined, done: true };
    let nextElem = arr[idx];
    idx++;
    return { value: nextElem, done: false };
  }

  return { next };
}

const automaticFetcher = fetchNextElement([88, 74, 3, 2, 5, 8, 5, 3]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
