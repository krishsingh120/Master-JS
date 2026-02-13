function randomIntNum(max) {
  return Math.floor(Math.random() * max);
}

const newPromise = new Promise((resolve, reject) => {
  let num = randomIntNum(10);
  if (num % 2 == 0) resolve(num);
  else reject(num);
});

console.log(newPromise);
