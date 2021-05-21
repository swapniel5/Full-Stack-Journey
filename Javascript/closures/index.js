// function a() {
//   var x = 7;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();

/********************* */
// function pass as parameter
// function a() {
//   var x = 7;
//   b();
// }
// a(function b() {
//   console.log(x);
// });

/********** */
// return the whole function

/*function a() {
  var x = 7;
  function b() {
    console.log(x);
  }

  return b;
}
var z = a();
console.log(z);

z();*/

/********************* */

// function a() {
//   var x = 7;
//   function b() {
//     console.log(x);
//   }
//  x = 100;
//   return b;
// }
// var z = a();
// console.log(z);

// z();

/****** */
function z() {
  var b = 199;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
