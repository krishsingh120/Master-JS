// This is Sync code
console.log("hello");
for (let i = 0; i < 10000000000; i++) {
  // some code
}
console.log("by");



// This is Async code
console.log("hi");
setTimeout(() => {
  console.log("hii");
}, 4000);
console.log("by");
