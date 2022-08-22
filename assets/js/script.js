const questionEl = document.getElementById('question');
const choice1El = document.getElementById('choice1');;
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
const answerEl = document.getElementById('answer');
const endGameEl = document.getElementById('endGame');


var uniInput = document.querySelector("#ini");
var scoreInput = document.querySelector("#score");
var storeButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var initialSpan = document.querySelector("#user-uni");
var userScoreSpan = document.querySelector("#user-score");

choice1El.addEventListener('click', nextQuestion);
choice2El.addEventListener('click', nextQuestion);
choice3El.addEventListener('click', nextQuestion);
choice4El.addEventListener('click', nextQuestion);

document.getElementById('startQuiz').addEventListener('click', function () {
    displayQuestion()
})

var unique = 0;
var timeleft = 75;
var currentQuestionIndex = 0;
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
            'Sett',
            'Camille',
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

function displayQuestion() {
    if (unique == 0) {
        var downloadTimer = setInterval(function () {
            timeleft--;
            document.getElementById("countdowntimer").textContent = timeleft;
            if (timeleft <= 0)
                clearInterval(downloadTimer);
        }, 1000);
        unique = 1;
    }

    const curr = questions[currentQuestionIndex];
    questionEl.innerText = curr.question;
    choice1El.innerText = curr.choices[0];
    choice2El.innerText = curr.choices[1];
    choice3El.innerText = curr.choices[2];
    choice4El.innerText = curr.choices[3];
}

function nextQuestion(event) {
    if (questions[currentQuestionIndex].answer != 3) {
        const correctId = 'choice' + (questions[currentQuestionIndex].answer + 1);

        if (correctId === event.target.id) {
            // alert('correct')
            answer.textContent = "correct";
        }
        else {
            answer.textContent = "wrong";
            // alert('wrong')
            timeleft = timeleft - 10;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            return;
        }
        displayQuestion()
    }
    else {
        endGameEl.innerText = "Quiz Finish";
    }
}

renderLastScore();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastScore() {
    var storedInitial = localStorage.getItem("storedIni");
    var passwordFromLs = localStorage.getItem("storedScore");
    initialSpan.textContent = storedInitial;
    userScoreSpan.textContent = passwordFromLs;
    // TODO: Retrieve the last email and password and render it to the page
}

storeButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initial = document.querySelector("#ini").value;
    var score = document.querySelector("#score").value;

    if (initial === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "Stored Succesfully");

        // TODO: Save email and password to localStorage and render the last registered user

        localStorage.setItem('storedIni', initial);
        localStorage.setItem('storedScore', score);
        renderLastScore();
    }
});
