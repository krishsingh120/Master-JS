function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCDEF"; // assume dummy download content
      reject(content);
    }, 1000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const fileName = "file.txt";
      resolve(fileName);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading", file, "on", url);
    setTimeout(function up() {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}

// how to handle error in promises => using dot catch
download("www.google.com")
  .then(function processDownload(value) {
    console.log("process download: ", value);
  })
  .then(function processDownload(value) {
    console.log("process download: ", value);
    return writeFile(value);
  })
  .then(function processDownload(value) {
    console.log("process download: ", value);
  })
  .catch(function errorCatch(error) {
    console.log("Error is catch: ", error);
  })
  .finally(function f(params) {
    // finally always executed, whether promise is resolved or reject
    console.log("this finally will always be executed");
  });
