//1
// Heap Ram Data
// var a = 2

// var b = a

// a = 15

// console.log(a);
// console.log(b);


//2 Reference Ram data
// var a = [1, 2, 4]
// var b = a

// a[2] = 15

// b[2] = 16

// console.log(a);



//3 Reference copy
// var a = [1, 2, 4]
// var b = [...a]

// a[2] = 15


//4 Reference copy
// var a = [1, 2, 4]
// var c = [8, 11, 12]
// var b = [...a, ...c]


// console.log(b);


//Mesele 1
//Method
// var arr = [1, 2, 5, 9, 15]
// var sum = 0

// for (i of arr) {
//     sum += i
// }


// var sum = arr.reduce((total, el) => total + el)
// console.log(sum);

//Mesele 2
// var arr = [1, 2, 5, 9, 15]
// var count = 0


// for (var i = 0; i < arr.length; i++) {
//     count++
// }

// console.log(count);

//Mesele 3

// var arr = [1, 5, 6, 7]


// var temp = arr[0] // 1
// arr[0] = arr[2] //6
// arr[2] = temp //1


// console.log(arr);


// var arr = [1, 5, 6, 7, 5]

// var i = arr.length - 1

// while (i > 0) {
//     var temp = arr[0]
//     arr[0] = arr[i]
//     arr[i] = temp
//     i--
// }


console.log(arr);