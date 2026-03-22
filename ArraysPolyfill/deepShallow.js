let original = [
  { 0: 11, 1: 12 },
  { 2: 14, 4: 22 },
  { 5: 31, 6: 42 },
];

let deep = structuredClone(original);

console.log(deep === original);
console.log(deep.address === original.address);
