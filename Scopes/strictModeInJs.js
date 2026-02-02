// "use strict";

// function fun() {
//   var name = "code";
//   lang = "JS";
//   console.log(name);
// }

// fun();
// console.log(lang);



// Good question
function fun() {  // -> assign a global scope
  var x = 10;  // -> assign a fun scope
  function gun() {  // -> assign a fun scope
    var y = 20;    // -> assign a gun scope
    console.log(x);  // print => 10
    console.log(y);  // print => 20
  }
  gun();  // call gun function
  console.log(x);  // x -> fun scope print => 10
  console.log(y);  // y not a fun scope or not a global scope throw error
}

fun();
