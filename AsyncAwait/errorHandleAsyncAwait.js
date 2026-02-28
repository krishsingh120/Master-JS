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

async function steps() {
  // returns a promise
  try {
    console.log("starting steps");
    const downloadedData = await download("www.xyz.com");
    console.log("data downloaded is", downloadedData);

    return downloadedData;
  } catch (error) {
    console.log("Error is catch: ", error);
  } finally {
    console.log("ending");
  }
}

steps();
