//Dom elementleri
let birinciReqem = document.querySelector('#birinciReqem')
let ikinciReqem = document.querySelector('#ikinciReqem')
let operatorAdi = document.querySelector('#operatorAdi')
let netice = document.querySelector('#netice')


//Tutdugumuz hesablama ucun olan deyerler
let firstNum = ''
let secondNum = ''
let operator = null
let siralama = false
let neticeniGor = ''


function emeliyyat(e) {
    let duymeninDeyeri = e.value

    
    //Birinci Reqem ucun yazilan
    if (duymeninDeyeri !== "+" && duymeninDeyeri !== "*" && duymeninDeyeri !== "beraberdir" && siralama === false) {
        firstNum +=  duymeninDeyeri
    } else if (duymeninDeyeri !== "+" && duymeninDeyeri !== "*" && duymeninDeyeri !== "beraberdir" && siralama === true) {
        secondNum += duymeninDeyeri
    }

    //Operator ucun yazilan Reqem ucun yazilan
    if (duymeninDeyeri === "+" || duymeninDeyeri === "*") {
        operator = duymeninDeyeri
        siralama = true
    }

    //Artiq Beraberdir isleyende
    if (duymeninDeyeri === "beraberdir") {
       
        if(operator === "*"){
            console.log('Vurma isi gorulur');
            neticeniGor = parseInt(firstNum) * parseInt(secondNum)

        }else if(operator === "+"){
            console.log('Toplama isi gorulur');
            neticeniGor = parseInt(firstNum) + parseInt(secondNum)
        }

    }

    //DOMa yazirma hissesi
    birinciReqem.innerHTML = firstNum
    operatorAdi.innerHTML = operator
    ikinciReqem.innerHTML = secondNum
    netice.innerHTML =`Result ${neticeniGor} `

    // console.log('-------------------');
    // console.log('birinci', firstNum);
    // console.log('Ope', operator);
    // console.log('ikinci', secondNum);
    // console.log(neticeniGor);

}