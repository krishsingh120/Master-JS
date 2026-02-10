console.log("hello!");
setTimeout(function exec() {
  console.log("hii");
}, 0);

for (let i = 0; i < 1000000000000; i++) {
  // some code
}
console.log("By!");

/**
 * Output (Same): 
 * hello!
 * By!
 * hii
 */
