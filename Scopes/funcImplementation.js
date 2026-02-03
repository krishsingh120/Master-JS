function fun(params) {
  // first keyword -> function declaration starts with function -> keyword
  // some Implementation => function declaration
}

let x = function gun(params) {
  // named => func expression
  // first expression not a function -> keyword
  // Some Implementation => function expression
};

let a = function (params) {
  // Anonymous => function expression
  // first expression not a function -> keyword
  // Some Implementation => function expression
};

(function hello(params) {
  // first expression not a function -> keyword
  // Some Implementation => function expression
})();

(function (params) {
  // first expression not a function -> keyword
  // Some Implementation => function expression
})();

let y = () => {
  // arrow func or fat arrow func
  // first expression not a function -> keyword
  // Some Implementation => function expression
};
