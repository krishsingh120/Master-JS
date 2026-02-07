let arr = [1, 3, 2, 4, 6, 5, 9];

function print(elem, idx) {
  return `Element is at index ${idx} is ${elem}`;
}

const res = arr.map(print);
console.log(res);

function customPrint(elem, idx) {
  return `Element is at index ${idx} is ${elem}`;
}

function customMapper(arr, func) {
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    response.push(func(arr[i], i));
  }

  return response;
}

const ans = customMapper(arr, customPrint);
console.log(ans);
