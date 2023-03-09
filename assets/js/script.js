var start = document.querySelector('.start-btn');
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var questionNumber = document.getElementById("questionNumber");
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var timerDiv = document.getElementById("timerContainer");
var acutals = document.getElementById("actuals");


let questions = [

    {
        questionNumber : "Question 1:",
        question : "What does HTML stand for?",
        choiceA : "Hypertext Markup Language",
        choiceB : "Hyperlinks and Text Markup Language",
        choiceC : "Home Tool Markup Language",
        choiceD : "None of the Above",
        correct : "A"

    },{
        questionNumber : "Question 2:",
        question : "What does CSS stand for?",
        choiceA : "Colorful Style Sheets",
        choiceB : "Cascading Style Sheets",
        choiceC : "Computer Style Sheets",
        choiceD : "None of the Above",
        correct : "B"

    },{
        questionNumber : "Question 3:",
        question : "How do you write an IF statement in JavaScript?",
        choiceA : "if i = 5",
        choiceB : "if i = 5 then",
        choiceC : "if (i == 5)",
        choiceD : "None of the Above",
        correct : "C"

    },{
        questionNumber : "Question 4:",
        question : "Which is not a datatype in JavaScript?",
        choiceA : "Boolean",
        choiceB : "Number",
        choiceC : "String",
        choiceD : "None of the Above",
        correct : "D"
    },{
        questionNumber : "Question 5:",
        question : "What does JS stand for?",
        choiceA : "JustSaying",
        choiceB : "JumpStart",
        choiceC : "JavaStrong",
        choiceD : "None of the Above",
        correct : "D"
    }

];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let timer;
let timerCount;
let timertEl = document.getElementById("timer-count");
let score = 0;


function renderQuestion(){

    let q = questions[runningQuestion];

    questionNumber.innerHTML = q.questionNumber;
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click",startQuiz);

// Start Quiz
function startQuiz(){
    quiz.style.display = "initial";
    timerCount = 50;
    runningQuestion = 0;
    renderQuestion()
    startTimer() 
}


function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timertEl.textContent = timerCount;

        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          topScore();
        }
      }, 1000);
}


// Check the answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;  
    }else{
        timerCount -= 10;
    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion()
    }else{
        clearInterval(timer);
        topScore();
    }
}

function topScore(){
    timerDiv.style.display = "none";
    quiz.style.display = "none";
    scoreDiv.style.display = "initial";

    var userInfo = prompt('Assesment Completed. You scored ' + score +' out of 5. Please enter your initials below:');
    acutals.innerHTML =  userInfo + "  Score:" + score;

    var userData = {
        intials: userInfo,
        highScore: score
    };

    localStorage.setItem(userData, JSON.stringify(userData));

    return;
}   
