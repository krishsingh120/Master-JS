// Way1 to make a global scope variable

console.log(name);
// let name = "krish";
var name = "krish";
const fun = () => {
  console.log(name);
};

fun();
console.log(name);
