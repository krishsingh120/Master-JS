// Dry run by it your self.
console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000000000; i++) {
  // something
}

// this way to resolve the promise is similar to below
function f() {
  return new Promise(function (res, rej) {
    res("promise resolve!");
  });
}

// this is also similar to above
let x = Promise.resolve("kris's promise");

x.then(function processPromise(value) {
  console.log("Whose promise ?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");
