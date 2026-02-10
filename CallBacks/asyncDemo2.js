// Important example for interview
function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 10000000000; i++) {
    // some task
  }
  console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Starting timer");
  setTimeout(function exec0() {
    console.log("Completed the timer0");
    for (let i = 0; i < 10000000000; i++) {
      // some task
    }
  }, 5000); // 5sec timer
}

function timeConsumingByRuntimeFeature1() {
  console.log("Starting timer");
  setTimeout(function exec1() {
    console.log("Completed the timer1");
  }, 0); // 0sec timer
}

function timeConsumingByRuntimeFeature2() {
  console.log("Starting timer");
  setTimeout(function exec2() {
    console.log("Completed the timer2");
  }, 200); // 200ms timer
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By");

/**
  Hi
  loop starts
  loop ends
  Starting timer
  Starting timer
  Starting timer
  loop starts
  loop ends
  By
  Completed the timer1
  Completed the timer2
  Completed the timer0
*/
