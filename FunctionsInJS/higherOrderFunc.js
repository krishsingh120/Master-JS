// Higher order function ->

function print(x, cb) {
  /*
   x -> num
   cb -> function
  */
  console.log(x);
  cb(x);
}

print(20, function exec(num) {
  console.log("Num is: ", num);
});
