let btn = document.getElementById("checkanswer");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let label1 = document.querySelector("label[for='answer1']");
let label2 = document.querySelector("label[for='answer2']");
let questionElement = document.querySelector(".question");
let progressBar = document.querySelector(".border-bottom-2");

let questions = [
    "#1 What is the capital of France?",
    "#2 What is 2 + 2?",
    "#3 What is the largest planet in our solar system?",
    "#4 Who wrote 'Romeo and Juliet'?"
];

let answers = [
    ["Paris", "London"],
    ["4", "22"],
    ["Jupiter", "Mars"],
    ["William Shakespeare", "Charles Dickens"]
];

let correctAnswerIndexes = [0, 0, 0, 0];
let userAnswers = [];
let currentQuestionIndex = 0;

function showQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    label1.textContent = answers[currentQuestionIndex][0];
    label2.textContent = answers[currentQuestionIndex][1];
    progressBar.style.width = ((currentQuestionIndex) / questions.length) * 100 + "%";
}

function checkAnswer() {
    if (!answer1.checked && !answer2.checked) {
        alert("Please select an answer.");
        return;
    }

    let selectedIndex = answer1.checked ? 0 : 1;
    userAnswers[currentQuestionIndex] = selectedIndex;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        answer1.checked = false;
        answer2.checked = false;
        showQuestion();
    } else {
        progressBar.style.width = "100%";

        let resultString = "";
        for (let i = 0; i < questions.length; i++) {
            resultString += (userAnswers[i] === correctAnswerIndexes[i]) ? "1" : "0";
        }

        localStorage.setItem("myValue", resultString);

        window.location.href = "resultat.html";
    }
}

btn.addEventListener("click", checkAnswer);
window.onload = showQuestion;
