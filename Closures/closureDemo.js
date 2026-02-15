function process() {
  let i = 0;
  let k = 1;
  let j = 4;
  function innerProcess() {
    i += 1;  // i and j are in closure
    j += 10;
    return i;
  }

  return innerProcess;
}

let res = process();

console.log(res());
console.log(res());
console.log(res());
