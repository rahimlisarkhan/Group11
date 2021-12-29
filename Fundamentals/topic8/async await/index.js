function render(arr) {
    var personList = document.getElementById('personList')

    console.log("renderin icine dusen", arr);

    personList.innerHTML = arr.map(obj => {
        return `<div class="col-3">
                    <div class="card shadow" >
                        <img src="${obj.image_url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Adi ${obj.firstname}</h5>
                            <p class="card-text">Yasi ${obj.age}</p>
                        </div>
                     </div>
                </div> 
              `
    }).join('');

}

function errorPage404() {
    var personList = document.querySelector('body')


    personList.innerHTML = "<h1>Xeta bas verdi sehife tapilmadi</h1>";
}


//Promise
let myPromise = new Promise((resolve, reject) => {
    let companyPeople = {
        status: 200,
        data: {
            employee: [{
                    firstname: "John",
                    age: 35,
                    image_url: 'https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo='
                },
                {
                    firstname: "Marry",
                    age: 27,
                    image_url: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo="
                },
            ]
        }
    }

    if (companyPeople.status === 200) {

        setTimeout(() => {
            resolve({
                mesaj: "Hersey qaydasindadir data geldi",
                cavab: companyPeople
            })
        }, 3000)

    } else {
        reject({
            mesaj: "Serverde xeta bas verdi internet getdi.",
            cavab: null
        })
    }
})

// 
async function iscileriGetiren(){
    try{
        let res = await myPromise
        console.log(res);
        
        let arrayInfo = res.cavab.data.employee
        render(arrayInfo)
        
    }catch(error){
        errorPage404()
        console.log(error);
    }
}



iscileriGetiren()




// myPromise.then((res) => {
//         // console.log(res);
//         var arrayInfo = res.cavab.data.employee
//         render(arrayInfo)
//     })
//     .catch((error) => {
//         errorPage404()
//         // console.log(error);
//     }).finally(() => {
//         // console.log('Funksiya isledi emeliyyatlar bitdi');
//     })







//Asyc
// let myPromiseSecond = new Promise((resolve, reject) => {
//     var a = 0

//     if (a) {
//         resolve('Isledi')
//     } else {
//         reject("Xeta")
//     }

// })



// let iscileriGetiren = async () => {

//     try {
//         let netice = await myPromiseSecond
//         console.log(netice);

//     }catch(error){
//         console.log(error);

//     }

// }

// iscileriGetiren()
















