console.log(Number("123"));
console.log(Number("abc"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);

// correct way to check num is NaN
console.log(isNaN(x));

console.log(isNaN("krish")); // isNaN converts incoming input to Number

console.log(Number.isNaN("krish"));

console.log(Number.isNaN(x));

// algorithimcally check
if (typeof x == "number" && x !== x) {
  console.log("true");
}
