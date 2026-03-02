// run inside a browser
function Product(n) {
  this.name = n;
}

const p = new Product("krish");

Product.prototype.display = function display(params) {
  console.log(this.name);
};

console.log(p.display());
