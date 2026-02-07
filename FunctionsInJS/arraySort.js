let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array

arr.sort();
// it sorts the given array
// [expectation] → this might arrange elements in increasing order
// default implementation of arr.sort() is going to sort my array in lexicographical order (Dictionary order)

/**
 * 0 → A
 * 1 → B
 * 2 → C
 * 3 → D
 * 4 → E
 * 5 → F
 * 6 → G
 * 7 → H
 * 8 → I
 * 9 → J
 *
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D]  // if we arrange it according to dictionary
 *
 * [B, BA, BAA, BAAA, BB, BC, BD, ...]
 */

console.log(arr);

const brr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

brr.sort(function (a, b) {
  // if a < b → a - b will be negative → if cmp function gives negative then a is placed before b (a < b)
  // if a > b → a - b will be positive → if cmp function gives positive then b is placed before a (a > b)
  return b - a;
}); // sort is a HOF, the sort function takes a comparator function as argument

console.log(brr);
