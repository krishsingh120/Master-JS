// Question 1:  Scoping of let, const and var
// function fun() {
//   //  -> global scope
//   var i = 5; // -> fun scope

//   while (i < 10) {
//     var x = i; // -> fun scope
//     i++;
//   }
//   console.log(x); // print 9
// }
// fun();

// let i = 5; // -> global scope
// console.log(y); // during hoisting undefined value is assigned

// while (i < 10) {
//   var y = i; // global scope
//   i++;
// }

// console.log(y);



// Question 2: Use case of let and var
function fun(x) {
  let i; // let == var, both are play same role int this problem
  if (x % 2 == 0) {
    i = 0;
  } else {
    i = 1;
  }
}

function gun(x) {
  if (x % 2 == 0) {
    var i = 0; // if i use let they will give error, but var  use anywhere in this function
  } else {
    var i = 1;
  }

  console.log(i);
}

fun();
gun();
