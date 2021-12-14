let students = JSON.parse(localStorage.getItem('users'))


if (!students) {
    students = []
}

render(students)
qeydiyyatiYoxlayan()

document.querySelector("#submitBtn").addEventListener('click', function (e) {
    e.preventDefault();


    let fullName = document.querySelector('#todoFullName').value
    let job = document.querySelector('#todoJob').value
    let age = document.querySelector('#todoAge').value
    let id = Date.now()

    let studentInfo = {
        id,
        fullName,
        job,
        age
    }

    students.push(studentInfo)

    localStorage.setItem('users', JSON.stringify(students))

    render(students)
})

function render(arr) {

    //Sadece hemise table capa verir
    document.querySelector("#todoList tbody").innerHTML = arr.map(user => ` 
            <tr>
                 <td >${user.id}</td>
                  <td >${user.fullName}</td>
                  <td >${user.age}</td>
                   <td >${user.job}</td>
                   <td onclick="deleteitem(${user.id})" >del </td>
             </tr>
    
    `).join('')





}

//Heleki duz islemir amma id tutub isi gore bilirik esasda ele id tutulmasidir.
function deleteitem(id) {
    console.log(id);

    students = students.filter(user => user.id !==id)

    localStorage.setItem('users', JSON.stringify(students))
    render(students)
}


setItemCookie("username","adminadmin")

document.querySelector("#loginBtn").addEventListener("click",function(){
    let userDeyeriCookie = getItemCookie("username")
    let userPanelLogin = document.querySelector('#loginUserName').value


    let usePanel =document.querySelector('#usePanel')
    let loginPanel =document.querySelector('#loginPanel')


    console.log(userPanelLogin);

    localStorage.setItem('giris',userPanelLogin)

    if(userPanelLogin.trim() === userDeyeriCookie ){
        alert('Xosgeldiz');
        loginPanel.classList.add('d-none')
        usePanel.classList.remove('d-none')

    }
    else{
        alert('Sehf qeyd olunub');
  
    }

})


function qeydiyyatiYoxlayan(){
        //Yeniden yoxlayir duzduse icaze verecek
        let userDeyeriCookie = getItemCookie("username")
        let localdaSaxladigimKohneUserName =  localStorage.getItem('giris')
       
        if(localdaSaxladigimKohneUserName?.trim() === userDeyeriCookie ){
            loginPanel.classList.add('d-none')
            usePanel.classList.remove('d-none')
        }
}

//Cookie special funcion
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