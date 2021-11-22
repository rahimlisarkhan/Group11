//Write method first
// var A = function () {

//     console.log('Kombayin ise dusdu');
// }

// A()


//Write method second
// function A() {

//     var a = 5
//     var b = 2


//     return a + b
// }



// var kise = A()
// var kise2 = A()

// var result = kise + kise2

// console.log(result);


//Ex1
// function sum(radius) {

//     var uzunluq = radius * 2 * 3.14

//     return uzunluq
// }



// var cevre1 = sum(15)
// var cevre2 = sum(25)
// var cevre3 = sum(20)

// console.log(cevre1);
// console.log(cevre2);
// console.log(cevre3);



//Ex2

// function quvveteYukseltme(num) {

//     if(num % 2 === 0) {
//         return true
//     }
//     else{
//         return false
//     }

// }


// var netice = quvveteYukseltme(2)

// console.log(netice);


//Ex 3

// function hesabla(par1, par2, par3 = 1) {

//     if (par1 === 5) {
//         par1 = 100
//     }

//     return par1 + par2 + par3
// }



// var netice = hesabla(15, 20, 45)


// console.log(netice);



//Ex4

// function maxNum(...arr) {
//     var lastNum = 0

//     for (i of arr) {
//         if (i > lastNum) {
//             lastNum = i
//         }
//     }

//     return lastNum
// }

// var a = maxNum(4, 2, 5, 6, 7, 25, 8, 9, 15)

// console.log(a);


// Various Arrays

// function saitYoxlayan(herf) {

//     var saitler = ['a', 'e', 'u', 'i', 'o']

//     if (saitler.indexOf(herf) !== -1) {
//         return 'Beli bu saitdir'
//     } else {
//         return 'Sait deyil'
//     }

// }


// console.log(saitYoxlayan('e'));




//Ex6 
// (

//     function sehifeAcildi() {
//         console.log('Hello World');
//     }

// )()

//MAth
// var list = ['John', 'Mary', 'Tural', 'Elsad']
// var list2 = ['John', 'Mary', 'Tural', 'Elsad']
// // var list2 = ['Sabina', 'Jale', 'Xeyyam', 'Akif']

// var netice = Math.floor(Math.random() * list.length);
// var netice2 = Math.floor(Math.random() * list.length);


// console.log(list[netice]);
// console.log(list2[netice2]);


//Date
var tarixMuellimi = new Date();

var netice = tarixMuellimi.setHours(tarixMuellimi.getHours() - 4);


// var d = new Date();
// var netice = d.setDate(d.getDate() + 50);


console.log(netice);