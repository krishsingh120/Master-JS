// dry run by it your self
function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the promise");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer completed");
}, 0);

let p = createPromise();

p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled with a value", value);
  },
  function rejectHandler() {},
);
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled with a value", value);
  },
  function rejectHandler() {},
);

for (let i = 0; i < 1000000000; i++) {}

console.log("ending");
