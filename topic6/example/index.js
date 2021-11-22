//Solition 1

// var num1 = '     SaLaMa        ';


// num1 = num1 ** 2
// num1 /= 2
// num1++

// var result = num1.toLowerCase().trim() === "salam" ? 'ela' : 'sehf'


// console.log(result)




//Solition 2

var num1 = 7


// if (num1 === 2) {
//     console.log('Ok');
// } else if (num1 === 4) {
//     console.log('Ok1');
// } else if (num1 === 'Hello') {
//     console.log('Ok2');
// } else {
//     console.log('Bad');
// }


switch (num1) {
    case 2:
        console.log('Ok1');
        break;
    case 4:
        console.log('Ok2');
        break;
    case 'Hello':
        console.log('Ok3');
        break;
    case 7:
        console.log('Ok4');
        break;
    default:
        console.log('Bad');
        break
}