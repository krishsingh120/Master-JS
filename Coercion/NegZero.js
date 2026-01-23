let x = -0;
console.log(x === 0);

console.log(Object.is(x, -0));
console.log(Object.is(x, 0));

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(0));

/*
Can we write a custom function that can gives us the sign of number property?
*/
