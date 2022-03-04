const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#Score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = {}

let questions = [
    {
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},
{
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},
{
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},
{
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},
{
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},
{
    question: "What is....",
    choice1:  'A',
    choice2:  'B',
    choice3:  'C',
    choice4:  'D',
    answer: A,
},

]

const Highest_Scores = 100
const max_questions = 4

StartGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion ()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > max_questions){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html') 
    }
    questionCounter++
    progressText.innerText =  Question ${questionCounter} of ${max_questions}  
    ProgressBarFull.style.width =  ${(questionCounter/max_questions) * 100}%

    const questionsIndex = Math.floor(Math.random[] * availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex] 
    question.innerText = currentQuestion.question
    
}

var questions = [
{
    prompt: ""
}


]

var score = 0;

for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct!");
    } else {
        alert("Wrong!");
    }
}
alert("you got" + score +)


//timer
function countdown{}[
    var timeinterval

]

setInterval(function){
    console.dir(mius);
    $(clock).text(minus);
    minus--, clearInterval(setInterval);

}

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
 
 
];
 
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
 
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
 
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
 
       currentQuiz++
 
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
           <button onclick="location.reload()">Reload</button>
           
       }
    }
});

var scoreBoard = document.querySelector("#scoreboard");

function getScores() {
    var existingScores = JSON.parse(localStorage.getItem("highscores"));

for (let index = 0; index < existingScores.length; index++) {
    //create a new row for each item 
    const newTableRow = document.createElement("tr");
    //create table data cells for username/score
    const username = document.createElement("td");
    const score = document.createElement("td");
    //add text to the data cells
    username.textContent = existingScores[index].username;
    score.textContent = existingScores[index].score;
    //append td's to the new row
    newTableRow.appendChild(username);
    newTableRow.appendChild(score);
    //append the new row to the table
    scoreBoard.appendChild(newTableRow);

}

    }

    var time = questions.length * 15;
var currentQuestionIndex = 0;
var currentQuestion;
var timeLeft;
var startQuiz;

var startButton         = document.querySelector("#start-button");
var questionsElement    = document.querySelector("#questionArray");
var timer               = document.querySelector("#time");
var choices             = document.querySelector("#possible-answers");
var StartScreen         = document.querySelector("#start-screen");
var EndScreen           = document.querySelector("#end");
var questionText        = document.querySelector("#question-text");
var form                = document.getElementById("form");

//added for storage
var count = localStorage.getItem("score");



function startQuiz() {
    countdown();
    StartScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class", "hide");
    getQuestion();
}

function endQuiz() {
    //get time from timer element
    clearInterval(startQuiz);
    questionsElement.setAttribute("class", "hide");
    EndScreen.removeAttribute("class", "hide");
    var finalScore = document.querySelector("#final-score");  
    finalScore.textContent = timer.textContent;
}


function getQuestion() {
    console.log(timeLeft);
    if (questions[currentQuestionIndex] === undefined) {
        endQuiz();
        return;
    }

    currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    choices.textContent = "";

    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);
        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];
        choices.appendChild(choiceNode);
        choiceNode.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    console.log(currentQuestion);
    console.log(event.target.value);

    if (event.target.value === currentQuestion.answer) {
        console.log("Correct!");
        
    }
    else {
        console.log("nope");
        timeLeft = timeLeft - 3;
    }
    currentQuestionIndex++
    getQuestion();
}

startButton.addEventListener("click", startQuiz);

function countdown() {
    timeLeft = 15;

    startQuiz = setInterval(function () {

        if (timeLeft > 1) {

            timer.textContent = timeLeft;

            timeLeft--;
        } else {

            timer.textContent = '0';
            //endQuiz();
            clearInterval(startQuiz);

        }
    }, 1000);
}

var existingScores = localStorage.getItem("highscores");
var scoresArray = [];

if (existingScores) {
    existingScores = JSON.parse(existingScores);
    for (let index = 0; index < existingScores.length; index++) {
        scoresArray.push(existingScores[index]);
    }
}

function formSubmit(event) { 
    event.preventDefault(); 
    scoresArray.push({ 'username': username.value, "score": timer.textContent })
    localStorage.setItem("highscores", JSON.stringify(scoresArray)); 
    location.href = "./scoreboard.html";
} 

form.addEventListener('submit', formSubmit);
