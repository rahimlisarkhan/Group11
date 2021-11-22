// var telebeCedveli = document.querySelector('table tbody')
// var telebeninNomresi = document.querySelector('#fullIDNum')
// var telebeninTamAdi = document.querySelector('#fullName')
// var telebeninFakultesi = document.querySelector('#fakulte')
// var telebeninYasi = document.querySelector('#telebeninYasi')
// var melumatiGonder = document.querySelector("#gonder")
// var melumatiGoster = document.querySelector("#goster")

// var universityData = []

// melumatiGonder.addEventListener('click',(e)=>{
//     e.preventDefault()


//     var telebeninSexsiMelumatlari = {
//         id:telebeninNomresi.value,
//         fullName:telebeninTamAdi.value,
//         age:telebeninYasi.value,
//         faculty:telebeninFakultesi.value
//     }

//     telebeninNomresi.value = ''
//     telebeninTamAdi.value =''
//     telebeninYasi.value = ''
//     telebeninFakultesi.value=''


//     universityData.push(telebeninSexsiMelumatlari)
//     console.log(universityData);

//     melumatlariGosterenFunk()
// })

// var melumatlariGosterenFunk = () =>{
//     telebeCedveli.innerHTML = universityData.map((obyekt) => `
//             <tr>
//                 <td>${obyekt.id}</td>
//                 <td>${obyekt.fullName} </td>
//                 <td>${obyekt.faculty} </td>
//                 <td>${obyekt.age} </td>
//             </tr>
//     `).join('');
// }



// melumatiGoster.addEventListener('click',melumatlariGosterenFunk)