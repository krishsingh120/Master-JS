// ToString -> "" + someValue
console.log("" + 0); // output -> "0"
console.log("" + -0); // output -> "0"

console.log("" + []); // [] -> ""

console.log(typeof ("" + {})); // {} -> string of [object object]

console.log(typeof ("" + [1, 2, 3]));

console.log("" + [null, undefined]);

console.log("" + [1, 2, 3, null, 4]);

// ToNumber
console.log(0 - "010"); // 0 - 10 => -10

console.log(0 - "O10"); // 0 - NaN => NaN (no conversion direct apply)

console.log(0 - 010); // conversion octal to decimal -> 0 - 8 = -8

console.log(0 - "0xa"); // conversion hex to decimal -> 0 - 10 = -10

console.log(0 - 0xa); // -10 (no conversion direct apply)

console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
console.log(["1"] - 1);

