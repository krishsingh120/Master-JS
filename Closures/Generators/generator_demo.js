function* fetchNextElement(i) {
  console.log("I'm inside the generator functions!");

  yield i;

  let x = 10;
  let y = 23;
  console.log("Multiply of X * Y is : ", x * y);

  yield i + 2;

  let z = 10;
  let w = 23;
  console.log("Multiply of Z * W is : ", z * w);

  yield i + 3;

  console.log("Some Where in middle!");


  return 1002;

  yield i + 4;
  yield i + 5;
}

const iter = fetchNextElement(10);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());



