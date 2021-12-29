// function factorial(num){
//     if(num === 1){
//         return 1
//     }else{
//         return 2 * factorial(num - 1)
//     }
// }

// var netice = factorial(2)

// console.log(netice);


// var ferhadArr = [{age:"As"},{age:"Zds"},{age:"Mds"},{age:"Se"}]

// var netice = ferhadArr.map(item => `<p>${item}</p> `)
// var netice = ferhadArr.sort(function(a,b){
//     if(b.age > a.age){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(netice);
//reverse()
// var ferhadArr = ['A','B','C']
// var ferhadArr1 = ['A','B','C']

// var netice = ferhadArr1.join('').replace("A" , "_")
// console.log(netice);
// console.log(ferhadArr.join() == ferhadArr1.join() );


// function factorial(num){ // num = 4
//     if(num === 1){ //num 4de beraberdi deye serti odemir ve else girir
//         return 1
//     }else{
//         return 2 * factorial(num - 1) // else giren num yeniden eyni isi gormesi ucun function cagirir ve neticeni gozleyir
//                         //bayaqdan gozleyer yaziq 2 asagindan gelen 4de vurulur ve umumi olaraq bize 8zi i verir
//                         if(num === 1){ // num = 3 artiq yuxaridan cagirilan functionda parametr bize 3 deyerin qaytarir
//                             return 1
//                         }else{ //3 deyeride serti odemeyib else girir ve yene function cagirir neticeni yene gozleyr
//                             return 2 * factorial(num - 1)  // asagidan gelen 2 vurulur 2ye ve yuxari 4 oturulur

//                                         if(num === 1){ // num = 2
//                                             return 1
//                                         }else{
//                                             return 2 * factorial(num - 1) //asagidan gelen 1  vururlur 2ye ve yuxari 2 oturulur


//                                                     if(num === 1){ // num = 1
//                                                         return 1 //artiq num 1e beraber oldugu icin burada sistem dayanir ve 1 qayatrir
//                                                     }else{
//                                                         return 2 * factorial(num - 1)
//                                                     }
//                                         }
//                         }
//     }


// }

// function factorial(num) { // num = 4

//     if (num === 1) {
//         return 1
//     } else {
//         return 2 * factorial(num - 1) // 8

//     }
// }


// var netice = factorial(16)



//Array method -------------------------------------------------------------
// console.log(netice);

//revere
//sort
//find
//filter
//map
//concat()

// function goturIstifadeEt(a,b){
//     return b - a
// }


var arr = ['Yusif',"Yasar","Emil","Xanim"]
// var personArr = [{
//     fullName: 46
// }, {
//     fullName: 12
// }, {
//     fullName: 9
// }, {
//     fullName: 55
// }]
// var siraliArr = personArr.sort((a, b) => b - a)

// var siraliArr = personArr.sort((a, b) => b.fullName > a.fullName ? 1 :  -1)

// var tersineArr = arr.reverse()
// var tersineArr = arr.find((item) => item.id === 18)


console.log(tersineArr);