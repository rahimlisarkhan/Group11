// let play = document.querySelector('#play')
// let stop = document.querySelector('#stop')
// let show = document.querySelector('#show')

// function parseTime(deyer) {

//     let verilenSaniye = deyer

//     let deqiqe = Math.floor(verilenSaniye / 60)
//     let qaliqSaniye = verilenSaniye - (deqiqe * 60)

//     let resultMinute = deqiqe < 10 ? "0" + deqiqe : deqiqe
//     let resultSec = qaliqSaniye < 10 ? "0" + qaliqSaniye : qaliqSaniye

//     return ` ${resultMinute} : ${resultSec}`

// }


// let time
// let count = 0
// var a

// play.onclick = function () {
//     clearInterval(a)
//      a = setInterval(() => {
//         time = parseTime(count++)

//     }, 1000)

// }



let a
let saniye = 03
let sonSaniyeDeyeri



function bizeNormalSaatiGosteren(a) {
    let saniyeler = a

    let deqiqe = Math.floor(saniyeler / 60)
    let qaliqSaniyeler = saniyeler - (deqiqe * 60)
    
    let result = `${deqiqe < 10 ? "0"+deqiqe : deqiqe}:${qaliqSaniyeler < 10 ? "0"+qaliqSaniyeler : qaliqSaniyeler}`

    return result
}


document.querySelector('#play').onclick = function () {
    clearInterval(a)
    a = setInterval(
        function () {
            sonSaniyeDeyeri = bizeNormalSaatiGosteren(saniye)
            saniye--


            document.querySelector('#ekran').innerHTML = sonSaniyeDeyeri

                console.log(sonSaniyeDeyeri === "00:00");

                if (sonSaniyeDeyeri === "00:00") {
                    alert('Vaxt bitdi bomba partdadi')
                    clearInterval(a)
                    return
                }

        }, 1000
    )
}



document.querySelector('#stop').onclick = function () {
    clearInterval(a)
}

document.querySelector('#lap').onclick = function () {
    clearInterval(a)
}