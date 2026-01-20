console.log(null == undefined);

console.log(12 == "12");

console.log(false == "0");
/*
x -> boolean -> ToNumber -> false -> 0
x = 0, y = "0"
y -> string -> ToNumber -> "0" -> 0
x = 0, y = 0 , result = true
*/

console.log(null == false);

/*
y -> boolean -> false -> ToNumber -> 0
compare => (null == 0)
return false
*/

// special rule of NaN -> NaN is NOT equal to anything -> not even itself
console.log("NaN" == NaN);  // false
console.log("NaN" === NaN);  // false


let obj = {
  x: 20,
  valueOf() {
    return 100;
  },
};

console.log(99 == obj);
console.log(100 == obj);
