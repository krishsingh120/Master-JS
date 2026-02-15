function process() {
  let i = 0;
  function innerProcess() {
    i += 1;   // This (i) coming from the process scope
    return i;
  }

  return innerProcess; // we are not calling the function, we are just returning.
}

let res = process(); // this line call the function, which returns another function

// How value of i should be increase, for every call of res(), bcz i should be not defined after returning the function
// This (i) is coming from closure property
console.log("First time calling: ", res());
console.log("second time calling: ", res());
console.log("Third time calling: ", res());
