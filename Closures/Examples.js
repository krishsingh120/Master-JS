// Closure come also here
// function DO(task) {
//   setTimeout(function exec() {
//     console.log(task); // Closure
//     return task;
//   }, 2000);
// }
// DO(10);
// console.log("Ending");

for (let i = 1; i <= 4; i++) {
  setTimeout(() => {
    console.log(i); // Closure
  }, 2000);

  console.log("Loop Ending....");
}
console.log("All Code executed....");
