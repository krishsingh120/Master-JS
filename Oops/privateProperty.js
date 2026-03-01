class Product {
  #name; // make it private property -> use every where inside a class using # => character
  #price;
  // rating;

  constructor(n, p, r) {
    this.#name = n;
    this.#price = p;
    this.rating = r;
  }

  set setName(n) {
    if (typeof n != "string") {
      console.log("invalid name passed");
      return;
    }
    this.#name = n;
  }

  setPrice(p) {
    if (p < 0) return;
    this.#price = p;
  }

  get getName() {
    return this.#name;
  }

  display() {
    console.log(this.#name, this.price, this.rating);
  }
}

// How to access real name property => getters or setters

const p = new Product("Shoes", 1583, 4.7);
p.name = "Bag"; // adding new name property with value is "Bag"
console.log(p);
p.display();
