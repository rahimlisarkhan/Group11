//https://yellowpages.az/

// let text = `diqqet - baki`
// let text = "t"
// let a = new RegExp(/\d/)

// let netice = text.match(/\s/)
// let netice = /am/.test(text)
// let netice = /^s/.test(text)
// let netice = 5/t$/.test(text)
// let netice = /^t$/.test(text)

// let netice = /^t$/.test(text)
// let test = '        '.replace(/[\s\t\r]/g,"")

// let netice = /\^/.test(text)
// let netice = /\\/.test(text)
// let netice = /a.a/.test(text)
// let netice = text.match(/\sa.a/g)
// let netice = text.match(/\d/g)
// let netice = text.match(/\D/g)
// let netice = text.match(/[^0-9]/g)

// let netice = /\d/.test(text)
// let netice = /[0-9]/.test(text)
// let netice = /[^0-9]/.test(text)
// let netice = /^[^0-9]/.test(text)
// let netice = /^\w/.test(text)
// let netice = /^\W/.test(text)
// let netice = /\w/.test(text)
// let netice = /\W/.test(text)
// let netice = /\s/.test(text)
// let netice = /\n/.test(text)
// let netice = /diqq?et/.test(text)
// let netice = /diqq*et/.test(text)
// let netice = /diqq*et/.test(text)
// let netice = /diqq*et/.test(text)
// let netice = /^d.*t$/.test(text)
// let netice = /^d.*t$/.test(text)
// let netice = /^d.+t$/.test(text)
// let netice = /^d.+t$/.test(text)

// let netice = text.match(/b.{2}i/g)
// let netice = text.match(/b[a-zA-Z]{2}i/g)
// let netice = /b.{2}i/.test(text)
// let netice = /ba|ki/.test(text)
// let netice = /(ba|ki)/.test(text)
// let netice = /[0-9]|-/.test(text)
// let netice = /[0-9]|-/.test(text)
// let netice = /[yd]iq{1,2}et/.test(text)

// console.log(netice);


// let email = "elsad@gmail.com"
// let email = "elsad@gmail.com dsdas dddadd sarkhan@info.ru dadaddsds @  <h1>dsadad</h1> test@mail.ru"


// let netice = /^[a-zA-Z0-9][\w\.]+@\w+\.[a-zA-Z]{1,5}$/.test(email)
// let netice = /\w+@\w+\.[a-zA-Z]{1,5}/.test(email)
// let netice = email.match(/\w+@\w+\.[a-zA-Z]{1,5}/g)

// axios.get("https://yellowpages.az/Az/results/?search-title=&sort-by=asc")
// .then((response)=>{
//     console.log(response.data);
//     let emailler = response.data.match( /\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}/)
//     setState({
//         emailler:emailler
//     })
// })

// let email = `<div><h1>+(994) 51 399-38-97</h1><h1>+(994) 51 555-38-97</h1></div>`
// let email = "+(994) 51 399-38-97"
// let netice = /\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}/.test(email)
// let goster = email.match(/\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}/g)

// let email = "+(994) 51 399-38-97"
// let netice = /^\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}$/.test(email)

// console.log(netice);
// console.log(goster);


// let metn = `Baku Pekin at London Maldiv Roma`

// let regex = /(at|ma)ldiv/ig


// let netice = regex.test(metn)
// console.log(netice);

// let tapilanSoz = metn.match(regex)
// // metn = metn.replace(/[\n\s\t]/,"")

// console.log(tapilanSoz);

// let email = "el5s_ad@gmail.com dsdasdasa <h1>Salam</h1> sarkhan@gmail.com, test@gmail.com "

// let emailReg = /[^@\s\t\r\n]+@\w+\.\w{1,5}/g

// let netice = emailReg.test(email)

// let tapdigi = email.match(emailReg)

// console.log(netice);
// console.log(tapdigi);



// let phone = "<div><h1>+(994)51 399-38-97</h1><h1>+(994)51 555-66-97</h1></div>"

// let phoneReg = /\+\(\d\)\d+\s\d{3}-\d{2}-\d{2}/g

// let netice = phoneReg.test(phone)

// let tapdigi = phone.match(phoneReg)

// console.log(netice);
// console.log(tapdigi);
// /^\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}$/