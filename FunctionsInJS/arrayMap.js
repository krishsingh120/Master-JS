/*
arrays are also custom objects in JS
index of the element is the key and the element itself is the value
["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}
*/

/**
 * map function
 * map is a higher order function available with arrays
 * it takes a function as an argument -> f
 * it returns an array in which every value is actually populated by calling
 * function f with original array element as argument
 */


let arr = [1, 3, 6, 4, 7];

function increByTwo(elem) {
  return elem + 2;
}

function powOf4(elem) {
  return Math.pow(elem, 4);
}

function print(element, idx, brr) {
  return `Element at index ${idx} is ${element}, ${brr}`;
}

function helper(elem, idx, arr) {
  arr[idx] = elem + 2
  return arr[idx]
}

let res = arr.map(print); // only pass function as argument not call immediate map calling internally handle
console.log(res);

/**
 * if the function that we are passing in map takes two arguments
 * then first argument will be accessing the actual value
 * second argument will be accessing index of that value
 * third argument will be another array
 */


/**
 * When to use maps ?
 * In any situation when we have to do an operation on every element of the array
 * and store the result of each operation
 * map can be a good option
 *
 * For example:
 * Array of product objects.
 *
 */

/**
 * here map is looping over every element
 * and then passing element, index, array -> in the function print
 */

const result2 = arr.map(helper);
console.log(result2);

