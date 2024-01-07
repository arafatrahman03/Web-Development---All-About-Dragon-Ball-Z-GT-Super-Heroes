const questions = [
    {
        question: "Who used Kamehameha first in the series?",
        answers: [
            { text: "Goku", correct: false},
            { text: "Krillin", correct: false},
            { text: "Master Roshi", correct: true},
            { text: "Granpa Gohan", correct: false},
        ]
    },

    {
        question: "From whom did Goku learn the Spirit Bomb?",
        answers: [
            { text: "Master Roshi", correct: false},
            { text: "Kami", correct: false},
            { text: "Grand Kai", correct: false},
            { text: "King Kai", correct: true},
        ]
    },

    {
        question: "Who adopted Goku when he fell to the earth?",
        answers: [
            { text: "Grandpa Gohan", correct: true},
            { text: "Chi-Chi", correct: false},
            { text: "Master Roshi", correct: false},
            { text: "Yamcha", correct: false},
        ]
    },

        {
        question: "Who turned Goku into a kid in Dragon Ball GT ?",        
            answers: [
            { text: "Pilaf", correct: true},
            { text: "Buu", correct: false},
            { text: "Dr. Gero", correct: false},
            { text: "Cell", correct: false},
        ]
    },

        {
        question: "How long does a fusion dance last?",      
            answers: [
            { text: "1 hour", correct: false},
            { text: "forever", correct: false},
            { text: "30 minutes", correct: true},
            { text: "10 minutes", correct: false},
        ]
    },

        {
        question: "Who is Goku's Brother?", 
            answers: [
            { text: "Bardock", correct: false},
            { text: "Turles", correct: false},
            { text: "Zamasu", correct: false},
            { text: "Raditz", correct: true},
        ]
    },

        {
        question: "Who is Goku Black?",        
            answers: [
            { text: "Zamasu", correct: true},
            { text: "Kararot", correct: false},
            { text: "Turles", correct: false},
            { text: "Goten", correct: false},
        ]
    },

        {
        question: "How many saiyans do you need to create a Super Saiyan God?",    
            answers: [
            { text: "6", correct: false},
            { text: "5", correct: true},
            { text: "4", correct: false},
            { text: "1", correct: false},
        ]
    },

        {
        question: "At what age did Goten became a Super Saiyan?",        
            answers: [
            { text: "5", correct: false},
            { text: "8", correct: false},
            { text: "7", correct: true},
            { text: "10", correct: false},
        ]
    },

        {
        question: "Who unlocked Gohan's potential first?",    
            answers: [
            { text: "Guru", correct: true},
            { text: "Goku", correct: false},
            { text: "Old Kai", correct: false},
            { text: "Dende", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
        
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;     
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();
    
