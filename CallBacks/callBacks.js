function fun(x, fn) {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  fn();
}

fun(10, function exec() {
  // callback func
  console.log("CB function is execute!");
});


// setTimeout
setTimeout(() => {
  console.log("hello");
}, 4000);
