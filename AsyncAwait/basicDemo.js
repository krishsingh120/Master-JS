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

// Use async await instead of generator + promise
async function steps() {
  const downloadedData = await download("www.xyz.com");
  console.log("Downloaded data :", downloadedData);
  const fileWritten = await writeFile(downloadedData);
  console.log("file written :", fileWritten);
  const uploadedResponse = await uploadData(
    "www.drive.google.com",
    fileWritten,
  );
  console.log("Uploaded data ", uploadedResponse);
  return uploadedResponse;
}

steps(); // they works same as generator + promises
console.log("outside"); // not waiting for a downloading a data
console.log("hello");
