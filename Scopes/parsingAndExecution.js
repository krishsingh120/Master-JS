var teacher = "hello"; // -> assign global scope

function fun() {
  // -> assign global scope
  var teacher = "world"; // -> assign func scope
  content = "JS";  // -> auto global scoped
  console.log(teacher);
}

function gun() {
  // -> assign global scope
  var student = "hello world"; // -> assign func scope
  console.log(student);
}


//  for this case fun not call and "content" -> not assign to auto global scope
// console.log(content); 

fun();
gun();
console.log(teacher);
console.log(content); // auto global assign -> during execution phase not parsing part

/*
Output of this code:
    world
    hello world
    hello
*/
