// Variables for game and questions 
const questionEl = document.getElementById('question');
const choice1El = document.getElementById('choice1');;
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
const answerEl = document.getElementById('answer');
const endGameEl = document.getElementById('endGame');

// Variables for initals and time left 
var uniInput = document.querySelector("#ini");
var scoreInput = document.querySelector("#score");
var storeButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var initialSpan = document.querySelector("#user-uni");
var userScoreSpan = document.querySelector("#user-score");

// Add events on click next question 
choice1El.addEventListener('click', nextQuestion);
choice2El.addEventListener('click', nextQuestion);
choice3El.addEventListener('click', nextQuestion);
choice4El.addEventListener('click', nextQuestion);

document.getElementById('startQuiz').addEventListener('click', function () {
    displayQuestion()
})

// Time variables 
var unique = 0;
var timeleft = 75;

// Current question 
var currentQuestionIndex = 0;

// Questions
const questions = [
    {
        question: 'What does Sett W ability do',
        choices: [
            'Sett W to bully champtions',
            'It gives gives temporaly sheld and true damege',
            'chioce 3',
            'choice 4',
        ],
        answer: 0
    },
    {
        question: 'What is the best champtions',
        choices: [
            'Camille',
            'Sett',
            'Ash',
            'Ornn',
        ],
        answer: 1
    },

    {
        question: 'What is the best lane to play',
        choices: [
            'Mid',
            'Toplane',
            'Bot/Support',
            'Jungle',
        ],
        answer: 2
    },

    {
        question: 'The most annoying champion',
        choices: [
            'Yuumi, Vayne, Shaco',
            'Nasus, Illaoi, Tryndamere',
            'Teemo, Zed, LeBlanc,',
            'All',
        ],
        answer: 3
    },
];
// Variable for time stop
var timestop = 0;

// function display Questions
function displayQuestion() {
    if (unique == 0) {
        var downloadTimer = setInterval(function () {
            if(timestop ==0){
            timeleft--;
            }
            document.getElementById("countdowntimer").textContent = timeleft;
            if (timeleft <= 0)
                clearInterval(downloadTimer);
        }, 1000);
        unique = 1;
    }
// Current question
    const curr = questions[currentQuestionIndex];
    questionEl.innerText = curr.question;
    choice1El.innerText = curr.choices[0];
    choice2El.innerText = curr.choices[1];
    choice3El.innerText = curr.choices[2];
    choice4El.innerText = curr.choices[3];
}
// Function for nextQuestion when its correct or incorrect 
function nextQuestion(event) {
    if (questions[currentQuestionIndex].answer != 3) {
        const correctId = 'choice' + (questions[currentQuestionIndex].answer + 1);

        if (correctId === event.target.id) {
            // alert('correct')
            answer.textContent = "Correct";
        }
        else {
            answer.textContent = "Wrong";
            // Every time a answer is wrong subtracts 10 secounds
            timeleft = timeleft - 10;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            return;
        }
        displayQuestion()
    }
    else {

        endGameEl.innerText = "QUIZ FINISH";
        timestop = 1;
        // Renders and stores last score and initial
        renderLastScore();
    }
}
// Got this code from one the exercise of module 4 
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
// Stores Initials and time left
function renderLastScore() {
    var storedInitial = localStorage.getItem("storedIni");

// Text content for initials and timeleft 
    initialSpan.textContent = storedInitial;
    userScoreSpan.textContent = timeleft;
}

// Initials conditions 
storeButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initial = document.querySelector("#ini").value;

    if (initial === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "Stored Succesfully");

        localStorage.setItem('storedIni', initial);
      
        renderLastScore();
    }
});