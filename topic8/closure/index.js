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
// function SAyHello(){
//     console.log('Hello');
// }


// window.onkeydown = function(){
//     SAyHello()
// }


// function Counter (){
//     let say = 0
//     return function (){
//         return say--
//     }
// }

// var muradinSaygaci = Counter()

// console.log(muradinSaygaci());
// console.log(muradinSaygaci());
// console.log(muradinSaygaci());
// console.log(muradinSaygaci());
// console.log(muradinSaygaci());

// var akifinSaygaci = Counter()

// console.log(akifinSaygaci());
// console.log(akifinSaygaci());
// console.log(akifinSaygaci());


// console.log(muradinSaygaci());
// console.log(muradinSaygaci());



// let a = 5

// console.log('onceki', a);



// function sum(){
//    var a = 2

//     console.log(a);

//     function daxili(){
//         // let a = 7
//         console.log(a);
//     }

//     // daxili()

// }

// sum()   


var azaldan = document.querySelector('#closureMinus')
var artiran = document.querySelector('#closurePlus')
var countArea = document.querySelector('#countArea')
var sebetCount = document.querySelector('#sebetCount')


function useState() {

    let count = 0

    function setCount(operator) {
        if (count <= 0) {
            count = 0
        }

        if (operator === 'plus') {
            return count++
        } else if (operator === 'minus') {
            return count--
        }
    }

    return setCount
}

let mehsullarUcun = useState()

azaldan.addEventListener('click', function () {
    let netice = mehsullarUcun('minus')
    countArea.innerHTML = netice
    sebetCount.innerHTML = netice

})

artiran.addEventListener('click', function () {
    let netice = mehsullarUcun('plus')
    sebetCount.innerHTML = netice
    countArea.innerHTML = netice

})