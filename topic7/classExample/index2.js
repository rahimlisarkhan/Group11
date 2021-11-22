var payBalance = document.querySelector('#payBalance')
var addBalance = document.querySelector('#addBalance')
var showBalance = document.querySelector('#showBalance')


class BankAccout {
    fullname;
    balance;
    userInputMoney = document.querySelector('#my-account')
    balanceContent = document.querySelector('#balance-content')
    userNameTitle = document.querySelector('#userNameTitle')


    constructor(fullname, money) {
        this.fullname = fullname;
        this.balance = money
    }

    welcomeUser() {
        this.userNameTitle.innerHTML = `Hörmətli <strong>${this.fullname}</strong> Exspress Banka xos gelmisiniz!`
    }

    userShowBalance() {
        this.userInputMoney.value = ''
        this.balanceContent.classList.remove('d-none')
        this.balanceContent.innerHTML = `Sizin balans : ${this.balance}₼`
    }

    userAddBalance() {
        this.balanceContent.classList.add('d-none')


        if (this.userInputMoney.value <= 0 || this.userInputMoney.value.trim() === '') {
            alert('Zəhmət olmasa düzgün qeyd edin')
            this.userInputMoney.value = ''

            return
        }

        this.balance += parseInt(this.userInputMoney.value)

        alert(`Balansınız uğurla  ${this.userInputMoney.value}₼ artirildi`)

        this.userInputMoney.value = ''
    }


    userPayBalance() {
        this.balanceContent.classList.add('d-none')

        if (this.userInputMoney.value <= 0 ||
            this.userInputMoney.value.trim() === '' ||
            this.balance === 0 ||
            this.userInputMoney.value > this.balance
        ) {
            alert('Zəhmət olmasa düzgün qeyd edin')
            this.userInputMoney.value = ''
            return
        }

        this.balance -= parseInt(this.userInputMoney.value)

        alert(`Balansınızdan uğurla  ${this.userInputMoney.value}₼ ödəniş olundu!`)

        this.userInputMoney.value = ''
    }

}

var johnDoeBankAccout = new BankAccout('John Doe', 1000)

payBalance.addEventListener('click', () => {
    johnDoeBankAccout.userPayBalance()
})

addBalance.addEventListener('click', () => {
    johnDoeBankAccout.userAddBalance()
})

showBalance.addEventListener('click', () => {
    johnDoeBankAccout.userShowBalance()
})


window.onload = () => johnDoeBankAccout.welcomeUser()