let btn = document.getElementById("checkanswer");
let questionContainer = document.querySelector(".question-container");
let answer1 = document.createElement("input");
let answer2 =document.createElement("input");
let label1 = document.createElement("label");
let label2 = document.createElement("label");

let questionElement = document.createElement("span");
questionContainer.appendChild(questionElement);
questionElement.classList.add("question");

let progressBarContainer = document.createElement("div");
progressBarContainer.classList.add("progress-bar");
let borderBottom1 = document.createElement("div");
borderBottom1.classList.add("border-bottom");
let borderBottom2 = document.createElement("div");
borderBottom2.classList.add("border-bottom-2");
progressBarContainer.appendChild(borderBottom1);
progressBarContainer.appendChild(borderBottom2);
questionContainer.appendChild(progressBarContainer);

answer1.type = "radio";
answer1.name = "answer";
answer1.id = "answer1";
answer1.classList.add("btn-check");
answer2.type = "radio";
answer2.name = "answer";
answer2.id = "answer2";
answer2.classList.add("btn-check");

label1.classList.add("btn");
label2.classList.add("btn");
label1.setAttribute("for", "answer1");
label2.setAttribute("for", "answer2");

questionContainer.appendChild(answer1);
questionContainer.appendChild(label1);
questionContainer.appendChild(answer2);
questionContainer.appendChild(label2);

let progressBar = document.querySelector(".border-bottom-2");

let questions = [
    "Question #1 What is the capital of France?",
    "Question #2 What is 2 + 2?",
    "Question #3 What is the largest planet in our solar system?",
    "Question #4 Who wrote 'Romeo and Juliet'?"
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

    let selectedIndex;

    if (answer1.checked) {
        selectedIndex = 0;
    } else {
        selectedIndex = 1;
    }
    
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