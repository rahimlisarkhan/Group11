//Buttons
var payBalance = document.querySelector('#payBalance'),
    addBalance = document.querySelector('#addBalance'),
    showBalance = document.querySelector('#showBalance');

class ProjectHtmlDOM {
    _userInputMoney = document.querySelector('#my-account')
    _balanceContent = document.querySelector('#balance-content')
    _userNameTitle = document.querySelector('#userNameTitle')
}

class BankAccount extends ProjectHtmlDOM{
    fullname;
    #balance;

    constructor(userName){
        super();
        this.fullname = userName;
    }

    getWelcomeBank(){
        this._userNameTitle.innerHTML = `Hormetli <strong> ${this.fullname} </strong> Exspress Banka xos gelmisiniz!`
    }

    setBalance(money){
        if(money <= 0 || typeof money !== "number"){
            alert("Zehmet olmasa pulu duzgun yazin")
            return
        }

        this.#balance = money

    }

    getShowBalance(){
        this._balanceContent.classList.remove('d-none'); 
        this._balanceContent.innerHTML = `Sizin balans : ${this.#balance}₼`

    }

    setAddBalance(){
        this._balanceContent.classList.add('d-none'); 

        var daxilOlunanPul = parseInt(this._userInputMoney.value)

        if(daxilOlunanPul <= 0 || !daxilOlunanPul){
            alert('Duzgun yazin.Pul 0 ola bilmez')
            this._userInputMoney.value = ''

            return
        }

        this.#balance += daxilOlunanPul

        alert(`Sizin balansiniza ${daxilOlunanPul} manat elave olundu`)

        this._userInputMoney.value = ''

        this.getShowBalance()
    }

    setPayBalance(){
        this._balanceContent.classList.add('d-none'); 

        var daxilOlunanPul = parseInt(this._userInputMoney.value)

        if(daxilOlunanPul <= 0 || !daxilOlunanPul || daxilOlunanPul > this.#balance){
            alert('Duzgun yazin.Emeliyyatda sehf bas verir')
            this._userInputMoney.value = ''

            return
        }

        this.#balance -= daxilOlunanPul

        alert(`Sizin balansinizdan ${daxilOlunanPul} manat pul silindi`)

        this._userInputMoney.value = ''
    }

}


var personJohnAccount =  new BankAccount("Yasar");
personJohnAccount.setBalance(1000)

//ODenis edende
payBalance.addEventListener('click',()=>personJohnAccount.setPayBalance())

//ODenis elave edende
addBalance.addEventListener('click',()=>personJohnAccount.setAddBalance())

//Balansi gormek
showBalance.addEventListener('click',()=>personJohnAccount.getShowBalance())

window.onload = personJohnAccount.getWelcomeBank()


