class Product {
  // No need to define value
  // name;
  // price;
  // rating;
  // discount;

  constructor(n, p, r, d) {
    // register a these properties inside plain brand new empty obj
    this.name = n;
    this.price = p;
    this.rating = r;
    this.discount = d;
    // return "10"; // primitive → no effect
    // return {x: 10};
    // return this; // if you don't return anything, it is equal to saying return this;
  }

  constructor() {

  }

  display() {
    console.log(this.name);
  }
}

const p = new Product(); // create brand new plain empty object.
console.log(p);
