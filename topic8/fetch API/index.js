// 7f267504

var apiUrl = `http://www.omdbapi.com/?apikey=7f267504&t=lusi`

var myPromise = fetch(apiUrl,{
  method:"GET",
  }) 

console.log('first',myPromise);

myPromise.then((res)=>{
    myPromiseSecond = res.json()
    console.log('second promise',myPromiseSecond);
    return myPromiseSecond
}).then((data)=>{
    console.log(data);
    console.log(data);
}).catch((err)=>{
    console.log(err);
})






// console.log(myPromise);

// myPromise.then((res)=>{
//     let ikinsiJsonSaxlayanPromise = res.json()
//     return ikinsiJsonSaxlayanPromise
// }).then((data)=>{
//     console.log(data);
// })

// async function getMovie(movieName){
//     var url = `http://www.omdbapi.com/?apikey=7f267504&t=${movieName}`
//     // let myPromise  = 

//     try{
//         let response = await fetch(url)
//         let data = await response.json()


//         if(data.Response === "False"){
//             errorInfo(data.Error)
//             return
//         }


//         showMovie(data)

//     }catch(error){
//         console.log(error);
//     }
// }

// var url = `http://www.omdbapi.com/?apikey=7f267504&t=${movieName}`
// fetch(url)
//     .then((response) => {
//         return response.json()

//     }).then((data) => {
//         if (data.Response === "False") {
//             errorInfo(data.Error)
//             return
//         }


//         showMovie(data)
//     }).catch((err) => {
//         console.log(err);
//     })


// function showMovie(obj) {

//     console.log('show funk icindedi', obj);
//     let filmCard = document.querySelector('#filmCard')

//     filmCard.innerHTML = `
//                 <img src=${obj.Poster} alt="Titanic">
//                 <p>Adi ${obj.Title}</p>
//                 <p>Ili${obj.Year}</p>
//                 <p>Ugurlari ${obj.Awards === "N/A" ? 'Yoxdur' : obj.Awards }</p>
//     `
// }

// function errorInfo(err) {
//     let searchMovie = document.querySelector("#notMovie")
//     searchMovie.innerHTML = err
// }




// function render() {
//     let valueMovie = document.querySelector('#valueMovie')
//     let searchMovie = document.querySelector('#searchMovie')

//     searchMovie.addEventListener('click', function () {
//         getMovie(valueMovie.value)

//     })
// }

// render()

// let movieName = 'Lucy'
// let url = `http://www.omdbapi.com/?apikey=7f267504&t=${movieName}`

// let data = null

// let response = fetch(url)

// console.log(response);
 


// response
// .then((res)=>res.json())
// .then((film)=>{
//     data= film
// })



// document.querySelector('#goster').addEventListener('click',()=>{
//     console.log(data);
// })