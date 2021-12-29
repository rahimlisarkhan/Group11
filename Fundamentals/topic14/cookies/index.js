// document.cookie = "name=Sarkhan;"
// document.cookie = "surname=Rahimli;"

// let a = document.cookie


// function setItemCookie(key, value) {
//     document.cookie = key + '=' + value + ";"
// }

// function getItemCookie(key) {

//     let cookieArr = document.cookie.split(';')

//     for (element of cookieArr) {
//         let elArr = element.split('=')

//         if (elArr[0].trim() === key) {
//             return elArr[1];
//         }
//     }

// }

// setItemCookie('education', 'BDU')
// let result = getItemCookie("education")



// document.cookie = "token=Asdsd54v51544654dasd4s6d464564;"

// console.log(document.cookie.split(';'));


function setItemCookie(key,value){
    document.cookie = `${key}=${value};`
}

function getItemCookie(key){
    let cookieArr = document.cookie.split(';')

    for (el of cookieArr){
        let elementinArr = el.split('=')

        if(elementinArr[0].trim() === key){
            return elementinArr[1]
        }
    }
}


setItemCookie("username","adminadmin")
let userDeyeri = getItemCookie("username")

// console.log(userDeyeri);
// setItemCookie("parol","1111")

