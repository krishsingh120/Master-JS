console.log("hello!");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("hii");
  }, 10);
}

for (let i = 0; i < 10000000000; i++) {
  // some code
}
console.log("By!");

/**
 * Output:
 * hello!
 * By!
 * hii
 * hii
 * hii
 */
