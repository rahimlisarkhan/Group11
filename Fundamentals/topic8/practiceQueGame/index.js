let questionsData = {
    q1: {
        desc: "What color is the sky?",
        answers: ["Blue", "Yellow", "Green"],
        trueAnswer: "Blue"
    },

    q2: {
        desc: "What do you call people who are 18+ ?",
        answers: ["Baby", "Adult", "Person"],
        trueAnswer: "Adult"
    },

    q3: {
        desc: "What color is the tree?",
        answers: ["Red", "Brown", "Green"],
        trueAnswer: "Green"
    },

    q4: {
        desc: "What do you call someone who has a wife?",
        answers: ["Wife", "Husband", "Married"],
        trueAnswer: "Married"
    },

    q5: {
        desc: "Which is the most us level in English?",
        answers: ["B1", "C2", "A2"],
        trueAnswer: "C2"
    }
}


class Questions{
    questionDOMTitle = document.querySelector('h5')
    questionDOMVariants = document.querySelector('#variants')

    questionArray = []
    questionArrayIndex = 0
    userPoint = 0
    questionUserAnswer = null

    constructor(question){
        console.log('test');
        this.questionArray = Object.values(question);
    }

    showQuestion(){
        let nowQuestion = this.questionArray[this.questionArrayIndex]

        if (!nowQuestion){
            console.log('Oyun bitdi');
            return 
        }

        this.questionDOMTitle.innerHTML = nowQuestion.desc
        // console.log(nowQuestion.answers);

        this.questionDOMVariants.innerHTML = nowQuestion.answers.map((q,index )=> {
            return ` <button id="${index}" onclick="buttonClickValue(this)" value="${q}">${q.toUpperCase()}</button> `
        }).join('')
    }

    userChoose(ans){
        this.questionUserAnswer = ans

        this.nextQuestion()

    }

    nextQuestion(){
        console.log(this.questionUserAnswer);
        let trueAnswer = this.questionArray[this.questionArrayIndex].trueAnswer
        console.log(trueAnswer);

        if(this.questionUserAnswer !== trueAnswer ){
            console.log('Cavab sehvdir');

        }else{
            console.log('Cavab dogrudur');
            this.userPoint+=10
        }

        this.questionArrayIndex++
        
        this.showQuestion()

    }

}

let ques = new Questions(questionsData)

ques.showQuestion()

let buttonClickValue = (e) => ques.userChoose(e.value)
