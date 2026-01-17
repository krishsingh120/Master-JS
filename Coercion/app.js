// ToNumber abstract operator
console.log(2 - 7); // -5
console.log(2 - null); // 2 - null -> 2 - 0 = 2
console.log(2 - undefined); // 2 - undefined -> 2 - NaN = NaN


// ToNumber applied to string type
console.log("453" - 1);  // 453 - 1 = 452
console.log("45abc73" - 1);  // NaN - 1 = NaN


// Assignment
console.log(1 - "0xa");  // = 1 - 10 = -9
console.log(1 - "0Xfa"); // = 1 - 250 = -249





