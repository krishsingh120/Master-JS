let arr = [1, 2, 3, 5, 5, 6];


const res = arr.map((elem, idx, a) => {
  return elem * idx;
})

console.log(res);
