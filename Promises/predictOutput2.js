function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);

    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download completed");
      resolve(data);
      console.log("successfully resolve the promise!");
    }, 7000);
  });
}

console.log("Start");

let promiseObj = fetchData("skfbjkdjhfv");

promiseObj.then(function A(value) {
  console.log("value is", value);
});


console.log("end");
