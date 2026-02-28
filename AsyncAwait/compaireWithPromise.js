function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

// Use async Await
async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();