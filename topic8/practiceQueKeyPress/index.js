let questionsData = {
    q1: {
        desc: "What color is the sky?",
        answers: ["Blue", "Yellow", "Green"],
        trueAnswer: "a"
    },

    q2: {
        desc: "What do you call people who are 18+ ?",
        answers: ["Baby", "Adult", "Person"],
        trueAnswer: "b"
    },

    q3: {
        desc: "What color is the tree?",
        answers: ["Red", "Brown", "Green"],
        trueAnswer: "c"
    },

    q4: {
        desc: "What do you call someone who has a wife?",
        answers: ["Wife", "Husband", "Married"],
        trueAnswer: "c"
    },

    q5: {
        desc: "Which is the most us level in English?",
        answers: ["B1", "C2", "A2"],
        trueAnswer: "b"
    }
}

class ReactComponent{
        //dom elementleri
        suallarTitle = document.querySelector('#suallarTitle')
        suallarinVariants = document.querySelector("#variants")
        cavabStatus = document.querySelector('#status')

}

class Question extends ReactComponent{

    suallar = []
    qelebe = 0 
    sualIndexsi = 0
    userVariant = null

    constructor(obj){
        super()
        console.log("Class yaradildi");
        this.suallar = Object.values(obj)
    }
    
    userSelect(userinSecdiyiVariant){
        if('abc'.indexOf(userinSecdiyiVariant) === -1){
            alert('A B C klavyede variantlarindan birin secin')
            return
        }

        this.userVariant = userinSecdiyiVariant

        this.nextQuestion()
    }

    showQues(){
        if(!this.suallar[this.sualIndexsi]){
            this.cavabStatus.innerHTML = `Oyun bitdi. Umumi xaliniz ${this.qelebe}`
            return
        }

        this.suallarTitle.innerHTML = this.suallar[this.sualIndexsi].desc
 this.suallarTitle.style.color='red'
        this.suallarinVariants.innerHTML = this.suallar[this.sualIndexsi].answers.map((q,i)=> {
        return `<span>${i+1}) ${q}</span> `
        
    }).join('')
    }

    nextQuestion(){
        let duzgunCavab = this.suallar[this.sualIndexsi].trueAnswer

        console.log('dogru olan',duzgunCavab);
        console.log('menim secdiyim',this.userVariant);

        if(duzgunCavab === this.userVariant ){
            console.log('Dogru cavabdir.');
            this.qelebe += 10
            this.cavabStatus.innerHTML = `Dogru cavabdir. Hal hazirdaki xal ${this.qelebe}`

        }else{
            console.log("Sehf secdiz");
            this.cavabStatus.innerHTML = `Sehf secdiz! Hal hazirdaki xal ${this.qelebe}`

        }

        this.sualIndexsi++

        this.showQues()

    }

}

let que = new Question(questionsData)

que.showQues()


window.onkeydown = function(event){
    que.userSelect(event.key)
}
