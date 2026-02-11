// with blocking code => for loop
function createPromiseWithLoop() {
  return new Promise(function exec(res, rej) {
    let num = Math.floor(Math.random() * 12);
    for (let i = 0; i < 1000000; i++) {}
    if (num % 2 == 0) {
      // promise is in fulfilled state
      res(20, num, 10); // always pick/set first value
    } else {
      // promise is in rejected state
      rej(num);
    }
  });
}

// with non blocking code => setTimeout

function createPromiseWithTimer() {
  return new Promise(function exec(res, rej) {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 12);
      for (let i = 0; i < 1000000; i++) {}
      if (num % 2 == 0) {
        // promise is in fulfilled state
        res(num, 10, 22);
      } else {
        // promise is in rejected state
        rej(num);
      }
    }, 5000);
  });
}

let x = createPromiseWithLoop();
console.log(x);

// let y = createPromiseWithTimer();
// console.log(y);
