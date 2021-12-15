// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRszLosmFHNfv0H4qzpxVjMYzmgd5XGqk",
    authDomain: "todoapp-512ca.firebaseapp.com",
    databaseURL: "https://todoapp-512ca-default-rtdb.firebaseio.com",
    projectId: "todoapp-512ca",
    storageBucket: "todoapp-512ca.appspot.com",
    messagingSenderId: "74998074232",
    appId: "1:74998074232:web:9c1187615194b10ccd168d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.database();

// let count = 0


//Database yazirma WRITE --------------------------------------------
// document.querySelector('#go').onclick = function () {
//     count++

//     db.ref("/jobs").set({
//         count: count,
//         price: 11,
//         total_price: 11 * count
//     })

// }

// let usersBudagi = db.ref("/users/")

// document.querySelector('#go').onclick = function () {
//     count++

// usersBudagi.push().set({
//     full_name: "Yasar",
//     age: 22
// })

// }


//Update ucun ---------------------------------------------------------
// document.querySelector('#go').onclick = function () {
//     count++

//     db.ref("/users/-MqynhoZSDRCSQuzpmln").set({
//         full_name: "Elsad", // evvel john idi
//         age: 24
//     })

// }

// var globalData = null

//Read-----------------------------------------------------
// usersBudagi.on("value", function (snap) {
//     let data = snap.val()

//     let yeniArrayIDli = Object.entries(data).map(kicikArrayler => {
//         istifadeciObyekti = {
//             id: kicikArrayler[0],
//             ...kicikArrayler[1]
//         }

//         return istifadeciObyekti
//     })

//     globalData = yeniArrayIDli

//     render(globalData)
// })


// setTimeout(function(){
//     console.log(globalData);
// },5000)


// let jobsBudagi = db.ref('jobs')

// jobsBudagi.on("value",function(snap){


//     if(snap.child('price').exists()){
//         snap.child('price').set(115)


//     }else{
//         console.log('Get admini yarat');
//     }

//     console.log(deyer);
// })


// jobsBudagi.child('count').set(105);



// let usersBudagi = db.ref('users')

// usersBudagi.on("value",function( snap ){
//     let saylari = snap

//     console.log( saylari.numChildren() );

// })






let userAdi = prompt('Adiniz nedi?')

let connectionsUser = db.ref('/connections')


connectionsUser.once("value", function () {

    let userGeldi = connectionsUser.push({
        fullName: userAdi
    })

    userGeldi.onDisconnect().remove()

})




connectionsUser.on("value", function (snap) {
    let div = document.createElement('h1')
    div.innerText = snap.numChildren()

    document.body.appendChild(div)
})