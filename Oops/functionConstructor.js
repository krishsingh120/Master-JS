// Function Constructor
function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;

  this.display = function () {
    console.log(this);
  };

  // return 10;
  // return {a: 10};
  // return this;
} 


// it creating using new => keyword the behaviour of function same as class 
const p = new Product("Shoes", 1583, "Puma White Sneaker");

console.log(p);

