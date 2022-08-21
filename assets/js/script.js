const questionEl = document.getElementById('question');
const choice1El = document.getElementById('choice1');;
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
var userNameSpan = document.querySelector("#user-email");
var userScoreSpan = document.querySelector("#user-password");
choice1El.addEventListener('click', nextQuestion);
choice2El.addEventListener('click', nextQuestion);
choice3El.addEventListener('click', nextQuestion);
choice4El.addEventListener('click', nextQuestion);


document.getElementById('startQuiz').addEventListener('click', function () {
    displayQuestion()
})

var unique = 0;
var timeleft = 45;
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
            'LeBlanc',
            'Yasuo',
            'Temmo',
        ],
        answer: 1
    },

    {
        question: 'What is the best lane to play',
        choices: [
            'Sett W to bully champtions',
            'Toplane',
            'It gives gives temporaly sheld and true damege',
            'choice 4',
        ],
        answer: 2
    },

    {
        question: 'What is the worst champion',
        choices: [
            'Sett W to bully champtions',
            'It gives gives temporaly sheld and true damege',
            'chioce 3',
            'Illaoli',
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

    const correctId = 'choice' + (questions[currentQuestionIndex].answer + 1);
    if (correctId === event.target.id) {
        questionEl.textContent = "correct";
    }
    else {
        questionEl.textContent = "wrong";
        // alert('wrong')
        timeleft = timeleft - 10;
        
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        return
    }
    displayQuestion()
}

function renderLastRegistered() {
    var storedName = localStorage.getItem("name");
    var passwordFromLs = localStorage.getItem("storedPassword");
    userNameSpan.textContent = storedName;
    userScoreSpan.textContent = passwordFromLs
}
