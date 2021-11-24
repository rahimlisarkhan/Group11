// function divideByHalf(sum) {
//     return Math.floor(sum / 2);
// }

// function multiplyBy2(sum) {
//     return sum * 2;
// }


// function operationOnSum(num1, num2, operation) {
//     var sum = num1 + num2;

//     return operation(sum);
// }

// //   operationOnSum(3, 3, divideByHalf); // Outputs 3

// var netice = operationOnSum(5, 2, multiplyBy2); // Outputs 14

// console.log(netice);



// var toplama = function(){

//     return 5 + 5
// }

// var cixma = function(){ 

//     return 5 - 2
// }




// function foo1(a,b){

//     console.log("Men sene gostereyim deyer", a())
//     console.log("Men sene gostereyim deyer", b())

// }

// foo1(toplama,cixma)



// function muradinCombayini(surucu) {
//     return 50 * surucu;
// }


// function yasarinBoyuksirketi(isci,menimGozelQurgum) {

//     var netice = menimGozelQurgum(isci)
//     console.log(netice);

// }

// //   operationOnSum(3, 3, divideByHalf); // Outputs 3

// yasarinBoyuksirketi(4, muradinCombayini); // Outputs 14



// function A(callback){
//   
//     if(a){
//         console.log('Men A funksiyasiyam');
//     }else{
//         callback()
//     }

// }

// var B = function(){
//     console.log('Men B funksiyasiyam');
// }

// var C = function(){
//     console.log('Men C funksiyasiyam');
// }



// A(B)


// function Cixma(veremeGonderilenReqem){
//     return veremeGonderilenReqem - 10
// }

// function umumiHesabla(num,myCallBack){
//     var sum = 15 + num

//     var vedresindenGelenNetice = myCallBack(sum)
//     console.log(vedresindenGelenNetice);
// }

// umumiHesabla(100, Cixma)

// function xanim(e){
//     console.log('Xanimi Cagirdi');
// }

// // function murad(){

// //     console.log('MuradiCagirdi');
// // }

// // setTimeout(xanim, 1000)

// window.onkeydown = xanim

