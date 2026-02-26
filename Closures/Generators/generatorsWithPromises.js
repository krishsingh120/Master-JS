// Tasks: Generator with promises

function download(url, cb) {
  return new Promise((resolve, reject) => {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCDEF"; // assume dummy download content
      resolve(content);
    }, 4000);
  });
}
function writeFile(data, cb) {
  return new Promise((resolve, reject) => {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}
function uploadData(url, file, cb) {
  return new Promise((resolve, reject) => {
    console.log("Started uploading", file, "on", url);
    setTimeout(function up() {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}
function doAfterReceving(value) {
  let upcomingValue = iter.next(value);
  console.log("Upcoming value is: ", upcomingValue);
  if (upcomingValue.done) return;
  upcomingValue.value.then(doAfterReceving);
}

// Async generators => this is syntactical more clear way to handle this.
function* steps(params) {
  const downloadedData = yield download("www.xyz.com");
  console.log("Downloaded data :", downloadedData);
  const fileWritten = yield writeFile(downloadedData);
  console.log("file written :", fileWritten);
  const uploadedResponse = yield uploadData(
    "www.drive.google.com",
    fileWritten,
  );
  console.log("Uploaded data ", uploadedResponse);
  return uploadedResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceving);

// download("www.xyz.com")
//   .then(function processDownload(value) {
//     console.log("downloading done with following value", value);
//     return writeFile(value);
//   })
//   .then(function processWrite(value) {
//     console.log("data written in the file with name", value);
//     return uploadData(value, "www.upload.com");
//   })
//   .then(function processUpload(value) {
//     console.log("we have uploaded with", value);
//   });
