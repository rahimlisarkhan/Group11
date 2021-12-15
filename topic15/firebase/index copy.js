





















//   const firebaseConfig = {
//       apiKey: "AIzaSyCIjIn4x3aUFR1hClmCjpUaZIB07pu2LMY",
//       authDomain: "loginsystem-61262.firebaseapp.com",
//       databaseURL: "https://loginsystem-61262-default-rtdb.firebaseio.com",
//       projectId: "loginsystem-61262",
//       storageBucket: "loginsystem-61262.appspot.com",
//       messagingSenderId: "476806732788",
//       appId: "1:476806732788:web:3eab076eb87109140037a1"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig)
//   let db = firebase.database();
//   let globalData = null
  // let data = {title:"Paolo"}
  // db.ref('about').set(data)
  // db.ref('books').push().set(data)

  //   document.onclick = function () {

  //       db.ref('about').on('value', (snapshot) => {
  //           globalData = snapshot.val()
  //       })
  //       console.log(globalData);

  //   }

  //   setTimeout(function () {
  //       console.log(globalData);
  //   }, 10000)


  //   let info = prompt('Daxil olmaq ucun ad daxil edin')

  //   let connections = db.ref('connections')

  //   db.ref('info/connect').on('value', (snap) => {


  //       if (snap.val()) {
  //           let con = connections.push({
  //               fullname:info
  //           })

  //           con.onDisconnect().remove()
  //       }

  //   })

