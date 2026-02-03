(function hello(params) {
  console.log("HI", params);
})("Krish");

// () => immediate call to the function

function fun() {
  return 1;
}

function gun() {
  return 2;
}


// use IIFE Instead of this
// let i = 4;
// var x = 2;

// if (x % i == 0) {
//   var res = fun();
// } else {
//   var res = gun();
// }

// console.log(res);

var res = (function eva(i) {
   if(i % 2 == 0) return fun();
   else return gun();
})(4)

console.log(res);

