let obj = {
  x: 26,
  valueOf: () => {
    return 10;
  },
};

console.log(10 + obj); // output => TypeError
