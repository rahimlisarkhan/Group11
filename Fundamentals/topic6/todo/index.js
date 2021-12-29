var inputText = document.querySelector("#todoArea")
var sendBtn = document.querySelector("#submitBtn")
var todoTable = document.querySelector("#todoList tbody")

var todoList = []

sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    todoTable.innerHTML = ''

    if (inputText.value.trim() === '') {
        alert('Please write area')
    } else {
        todoList.push(inputText.value)
        inputText.value = ""

        for (var i = 0; i < todoList.length; i++) {

            var tr = document.createElement('th')
            tr.innerHTML = `
                <th scope="row">${i+1}</th>
                <td>${todoList[i]}</td>
                `
            todoTable.append(tr)
        }
    }

})
// var imgContent = document.querySelector('#imgContent')
// console.log(imgContent.getAttribute('data-gender'));

// if(imgContent.dataset.gender === 'male'){
//     console.log('Idman dersinde istirak etsin');
// }


// function render(){
//     var imgContent = document.querySelector('#imgContent')
//     imgContent.innerHTML = `
//      <h1>Sekil</h1>
//     <img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" alt="Flower">
//     `
//     //H1 Tag yaradilmasi
//     // var titleTag = document.createElement('h1')
//     // titleTag.innerHTML = 'Sekil'
//     // titleTag.classList.add('text-danger')
//     // // titleTag.classList.remove('text-danger')
//     // // titleTag.setAttribute('class','text-danger' )

//     // //Img tag yaradilmasi
//     // var imgTag = document.createElement('img')

//     // imgTag.setAttribute('src','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg')

//     // //Link

//     // var linkTag = document.createElement('a')
//     // linkTag.innerHTML='Sekile kecid et'
//     // linkTag.setAttribute('target','_blank')
//     // linkTag.setAttribute('href','https://www.google.com/search?q=flowers&sxsrf=AOaemvJKKimEvw_6SZiIdzmL70mVaJ2NNA:1636989676328&tbm=isch&source=iu&ictx=1&fir=kynP2p55eMS7TM%252CMqJ0o7Xjxwc15M%252C_%253BrwqXxYAWHAml0M%252CKHb_DrQoiHHqIM%252C_%253BYJ41ekDgpd2x2M%252C6QnaOLvEQovLfM%252C_%253BjJE0hEFD0yUrcM%252CnVrbZ6x84_QItM%252C_%253BW2pEjd86BOzFMM%252C20bl8h6BwkzjeM%252C_%253BH6ZRTaIzd_-aJM%252CH-1jOyOrDwhRdM%252C_%253BIfBZw4_IazGdyM%252Cpxn6KoNeXNKDvM%252C_%253BEX5OjZ4wVKWUZM%252CNF4Pp3x2g6jFJM%252C_%253BRfUQ_0SdSVxZyM%252CV4JMFD_QVN1xmM%252C_%253Bl8IWLIeDB4YA6M%252CKPmeNvveGCdUNM%252C_%253BVJHRZxwUeUnhqM%252Cy6_SwfhNBhbmNM%252C_%253BXxUdzQI7LdNsMM%252CCrfaTJgSpCntwM%252C_%253BI05mJg7fTlUE4M%252CTE6or1FVU4DnNM%252C_%253BpPA4xwuyUCzGqM%252C-jzg_ktY6Nq4QM%252C_%253Be8BVSvVhDR7X9M%252COuNyKUCOoYeowM%252C_&vet=1&usg=AI4_-kTCb3rOxZ2he8lj_SLXMqcD8_TgZw&sa=X&ved=2ahUKEwiKw6Hh1Zr0AhVQs6QKHXDIClsQ9QF6BAgSEAE&biw=1396&bih=665&dpr=1.38#imgrc=rwqXxYAWHAml0M')



//     // imgContent.append(titleTag,imgTag,linkTag)

// }


// render()


var bigArray = [1, 'soyad', false, null, undefined, [1, 5, 6], () => 5 + 6 ,

    [55, [10, 56, 45]]
]

// var netice  = bigArray[7][1][2]

// console.log(netice);


// var bigArray = []


// for(var i = 1; i <= 5; i++ ){
//     var userAnswer = prompt(`${i}-ci sualinizi daxil edin`)

//     // bigArray.push(userAnswer)

//     toplamaF()
// }

// console.log(bigArray);


// function sum(){
//     return 5 + 6
// }

// var sum = function () {
//     return 5 + 10
// }

// var sum1 = (a) =>{ 
    
// return 5 + a
// }

// var sum1 = a => 5 + a



console.log(sum1(100))