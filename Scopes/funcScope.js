if (false) {
  var x = 10;
}

console.log(x); // x -> undefined, lekin accessable hai

function func() {
  console.log(y); // y accessable hai
  var y = 12;
}

function gun() {
  console.log(z); // z accessable ni hai
  let z = 22;
}

func();
gun();
