//JSON OBJECT
//---------------------------------------------
// var userInfoTitle = ['full name', 'job', 'age', 'gender']
// var userInfoBody = ['John Doe', 'Design', 33, 'male', ]



// JSON
//Object

// var obj = {}

// var userInfo = {
//     full_name: 'John Doe',
//     age: 33,
//     gender: 'male',
//     job: 'Design'
// }

// Change
// userInfo['job'] = 'Developer'

//Delete
// delete userInfo['job']

//add new key
// userInfo['evlilik'] = true

// userInfo.full_name


// for( i in userInfo ){
//     console.log(userInfo[i]);
// }


// var convertObject = Object.keys(userInfo)
// var convertObject = Object.values(userInfo)
// var convertObject = Object.entries(userInfo)

// var array = [ ['full_name', 'John Doe']    ]

// var jobFilter = convertObject.filter((item) => item === 'Design')

// console.log(convertObject);


// var a = {
//     element:1
// }

// var b = { 
//     element2 : '100'
// }


// var c = {
//     ...a, 
//     ...b,
//     element5: [ {full_name:'John'}, {full_name:'Marry'} ]
// }

// var telebeArray = c.element5

// for(i of telebeArray){
//     console.log(i.full_name);
// }



//OBJECT with this method
//---------------------------------------------


// var car = {
//     marka:"Bmw",
//     model:null,
//     is_new:false,
//     year:2000,
//     speed:0,

//     start: function(){
//         this.speed += 20

//         this.melumatlariGoster()
//     },

//     melumatlariGoster:function(){
        
//         console.log('----------------------------');
//         console.log('MArka ' + this.marka);
//         console.log("Suret " + this.speed);
//     },

//     createModel: function(yeniModel){

//         // if(yeniModel.trim() === ''){
//         //     alert('Duzgun yazin')
//         //     return
//         // }

//         this.model = yeniModel
//     }

// }


// // car.melumatlariGoster()

// car.start()

// car.createModel(' ')

// console.log(car);



// var myBankCard = {
//     fullName:'John Doe',
//     money : 0,

//     hesabArtirilmasi: function(gelenPul){
//         this.money = gelenPul
    
//         this.balansiGoster()

//     },
    
//     balansiGoster: function(){
//         console.log(`Hormetli ${this.fullName}.Sizin balansiniz ${this.money}$`);
//     },

//     xerclenenPul : function(xerclediyi){

//         if(this.money === 0 || xerclediyi > this.money){
//             alert('Sizin balansinizda sican oynayir')
//             return 
//         }
//         this.money -= xerclediyi

//         this.balansiGoster()

//     }

    
// }


// myBankCard.hesabArtirilmasi(100)

// myBankCard.xerclenenPul(15)

// myBankCard.balansiGoster()

// var arr = [1,2,3]

// function simpleArraySum(ar) {
//     // Write your code here
    
//     var sum = 0
    
//     for (var i of ar){
//         sum+=i
//     }

//     return sum
// }

// var netice =  simpleArraySum(arr)

// console.log(netice);


// var citizenUSA = [[1,2,3] ]

// var myObj1 = { 
//     "userInfo":{
//         "full-name":"Joe Doe",
//          "age":33,
//          "children":[ 
//              {
//                  "fullName":"Marry Doe",
//                  "age":9
//              },
//              {
//                 "full-name":"Edie Doe",
//                 "age":2
//             }
//           ]
         
//     },
//     "userAddress":{
//         "jobAddress":"Boston New York USA",
//         "homeAddress":"Times New York USA"
//     },
//     "education":{
//         "university":[{
//             "name":"Havard"
//         }]
//     },
// }

// console.log(myObj1.userInfo.children[0].fullName);



// var myObj2 = {
//     fullName:"Joe Doe",
 
// }


