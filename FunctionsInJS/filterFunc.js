/**
 * Filter function
 * Filter is also a higher order function
 * Filter also loops over the array element
 * there is one special thing about filter, i.e. the argument function f which we have to pass inside
 * filter should always return a boolean, otherwise output will be converted to a boolean
 *
 * Filter loops over every element, passes that element in the argument function and then if the output
 * of this function call is true, then it stores the original element in a new array otherwise
 * doesn't add this element to the array
 */

function oddEven(x) {
  return x % 2 != 0;
}

let arr = [1, 4, 2, 5, 7, 3];

let res = arr.filter(oddEven);
console.log(res);

