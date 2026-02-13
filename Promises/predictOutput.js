// Dry run by it your self
function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {
    // something
  }
}

console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("krish's promise1");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  blocking_for_loop();
});

let y = Promise.resolve("krish's promise2");
y.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});

let z = Promise.resolve("krish's promise3");
z.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");
