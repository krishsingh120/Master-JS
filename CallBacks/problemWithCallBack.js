/**
 * 1. Inversion of Control
 * 2. call back hell => Readability Problem
 */

// call back hell
getUser(userId, (user) => {
  getOrders(user, (orders) => {
    processOrders(orders, (processed) => {
      sendEmail(processed, (confirmation) => {
        console.log("Order Processed:", confirmation);
      });
    });
  });
});

// Inversion of control
// Inversion of Control (IoC) means you don’t control when or how your code is called.
// Instead, a framework or another function controls the flow and calls your code when needed.
function doTask(fn, x) {
  // whole implementation is done by team A
  // fn(x * x); // calling my callback with square of x
  // fn(x * x);
} // team A

// here team b tries to use it
doTask(function exec(num) {
  // due to callbacks, I am passing control of how exec should be called to doTask
  // this is inversion of control
  console.log("woah num is", num);
}, 9);
