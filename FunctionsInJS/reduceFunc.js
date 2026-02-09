/**
 * reduce is a higher order function available for arrays
 * reduce also takes a function f as an argument,
 * what reduce does is, it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and accumulate the result of further function calls
 * with this particular result
 */

function sum(prev, curr, idx) {
  return prev + curr;
}

let arr = [1, 2, 3, 4, 5, 6];

let res = arr.reduce(sum);
console.log(res);

/**
 * first element → 2
 * second element → 3
 * third element → 4
 * fourth element → 5
 * fifth element → 6
 */

// use Case of reduce
/**
 * Cart → [iphone {price: 1000000, name: "Iphone"},
 * case {price: 500, name: "backcover"},
 * tempered glass {price: 300, name: tempered glass}]
 */

function addPrices(prev, curr) {
  let newPrice = prev.price + curr.price;
  return { price: newPrice };
}

let cart = [
  { price: 1000000, name: "Iphone" },
  { price: 500, name: "backCover" },
  { price: 300, name: "tempered glass" },
];

const totalPrice = cart.reduce(addPrices);
console.log(totalPrice.price);
