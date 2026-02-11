const newPromise = new Promise((resolve, reject) => {
  let n = 21;
  if (n % 2 == 0) resolve(n);
  else reject(n + 1);
});

console.log(newPromise);
