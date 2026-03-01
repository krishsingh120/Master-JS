// global scope
// 1. Node environment me
console.log(this); // empty obj => {}

// 2. Browser environment me
console.log(this); // window obj

function hello(params) {
  console.log(this);
}
hello();

// Methods
let obj = {
  name: "hello",
  sayHello: function name(params) {
    console.log(this);
  },
};

obj.sayHello();

// Event handler
document.querySelector("h1").addEventListener("click", function hello(params) {
  console.log(this); // jis per event listener lga hai whi hai is case me h1 tag
});

// call, apply, bind
// 1. call
let user = {
  name: "krish",
  age: 22,
  email: "krishsin2254@gmail.com",
};

function hey() {
  console.log(this); // empty obj or global obj
  // return this[0];
}

// Jo bhi value call(val) ke ander pass hogi, this ki bhi whi value hogi
let ans = hey.call(["user", "name"], 12, 13, 177);
// call(agr1, agr2, agr3....agrN) => jo phli value pass hoti hai wo "this" ke liye hoti hai, baki arguments hote hai!!
console.log(ans);

// 2. apply() — Same as Call but Arguments as Array
// func.apply(thisArg, [arg1, arg2])

// Only difference: Arguments passed as array

// 3. bind()  => return a new function with updated value of "this" -> value of this wo hogi jo tumne pass ki hai!!
let res = hey.bind({ name: "parth" });
console.log(res());  // Returns New Function (Does NOT Execute)



