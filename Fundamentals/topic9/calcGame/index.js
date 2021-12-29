$(document).ready(function(){

    class DomElements {
        elementFirstNum = $('.firstNum')
        elementSecondNum = $('.secondNum')
        elementOperatorNum = $('.userOperator')
        elementResultNum = $('.result')


    }


    class CalculatorApp extends DomElements {
        firstNum = ''
        secondNum = ''
        operation = null
        resultNum = null

        constructor() {
            super()
            // this.elementFirstNum = a
        }

        numberCount(num){

            console.log(num);
            // if (!this.nextNum) {
          
            //     return
            // }

            this.firstNum += num

            // this.secondNum += num

            this.logMonitoring()

        }

        logMonitoring(){
            console.log(this.firstNum,this.operation,this.secondNum);
            console.log(this.resultNum);
        }

        render(button){
            let buttonValue = button.val()

            if (button.hasClass('number')) {
                this.numberCount(buttonValue)
            }

        }


    }



    let calculate = new CalculatorApp('#sdasa')

    calculate.logMonitoring()


    $(document).on('click', '.btn', function () {
        calculate.render($(this))

    })

})