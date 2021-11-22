//Closures are the inner functions that are embedded in parent function
// function getName(){
//     // print name function is the closure since it is child function of getName
//      function printName(){
//          return 'John Doe'
//      }
//      // return our function definition
//      return printName;
// }

// const checkNames = getName();



// A closure gives you access to an outer function’s scope from an inner function
// //example
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();



// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12


// function counter (){
//     var count = 0
    
//     return function(){
//         return count++
//     }

// }

// var murad = counter()

// console.log(murad());
// console.log(murad());
// console.log(murad());