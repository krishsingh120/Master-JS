let iphone = {
  name: "Iphone 13 pro max",
  price: 120000,
  rating: 4.6,

  display() {
    console.log("first calling", this);
  },
};

let macBook = {
  name: "MackBook m4 pro",
  price: 250000,
  rating: 4.8,

  display: () => {
    console.log("second calling", this);
  },
};

macBook.display(); // this => is calling context, or calling context is that time -> macBook object
iphone.display()

console.log(this); // this refers -> empty obj
