let btn = document.getElementById("checkanswer");
let questionContainer = document.querySelector(".question-container");
let answer1 = document.createElement("input");
let answer2 =document.createElement("input");
let label1 = document.createElement("label");
let label2 = document.createElement("label");
let prevBtn = document.getElementById("pastpage");

let questionElement = document.createElement("span");
questionContainer.appendChild(questionElement);
questionElement.classList.add("question");

let progressBarContainer = document.createElement("div");
let borderBottom1 = document.createElement("div");
let borderBottom2 = document.createElement("div");
progressBarContainer.classList.add("progress-bar");
borderBottom1?.classList.add("border-bottom");
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
let classesToAdd = [ 'btn', 'answerLabel'];
label1.classList.add(...classesToAdd);
label2.classList.add(...classesToAdd);
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
    let labelText = document.querySelectorAll(".answerLabel");

    labelText.forEach((label, index) => {
        label.innerHTML = `<strong>${answers[currentQuestionIndex][index]}</strong>`;
    });

    questionElement.innerText = questions[currentQuestionIndex];

    let progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progress + "%";


    clearTimeout(window.timer);
    window.timer = setTimeout(() => {
        alert("Time is up! Moving to next question.");
        checkAnswer();
    }, 30000);
}

function checkAnswer() {
    if (!answer1.checked && !answer2.checked) {
        selectedIndex = 1;
    }

    if (answer1.checked) {
        selectedIndex = 0;
    } else {
        selectedIndex = 1;
    }

    prevBtn.disabled = currentQuestionIndex === 0;

    if (btn.innerText = currentQuestionIndex === questions.length - 2) {
        btn.innerText = "Terminez" 
    } else {        
        btn.innerText = "Suivant"
     }

    userAnswers[currentQuestionIndex] = selectedIndex;

    currentQuestionIndex++;

    localStorage.setItem("userAnswers", userAnswers.join(",")); 
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

    if (currentQuestionIndex < questions.length) {
        answer1.checked = false;
        answer2.checked = false;
        showQuestion();

        let savedAnswer = userAnswers[currentQuestionIndex];
        if (savedAnswer == 0) answer1.checked = true;
        if (savedAnswer == 1) answer2.checked = true;
    } else {
        progressBar.style.width = "100%";

        let resultString = "";
        questions.forEach((_, i) => {         
            if (userAnswers[i] == correctAnswerIndexes[i]) {
                resultString += "1";
            } else {
                resultString += "0";
            }   
        });

        localStorage.setItem("myValue", resultString);

        localStorage.removeItem("userAnswers");
        localStorage.removeItem("currentQuestionIndex");

        window.location.href = "resultat.html";
    }
}

btn.addEventListener("click", checkAnswer);

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;

        localStorage.setItem("userAnswers", userAnswers.join(","));
        localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

        showQuestion();

        let savedAnswer = userAnswers[currentQuestionIndex];
        answer1.checked = savedAnswer == 0;
        answer2.checked = savedAnswer == 1;
    }
}

prevBtn.addEventListener("click", goToPreviousQuestion);


window.onload = () => {
    let savedAnswers = localStorage.getItem("userAnswers");
    let savedIndex = localStorage.getItem("currentQuestionIndex");

    if (savedAnswers && savedIndex !== null) {
        userAnswers = savedAnswers.split(",").map(a => Number(a));
        currentQuestionIndex = parseInt(savedIndex);

        if (currentQuestionIndex >= questions.length) {
            window.location.href = "resultat.html";
            return;
        }

        showQuestion();

        let savedAnswer = userAnswers[currentQuestionIndex];
        if (savedAnswer == 0) answer1.checked = true;
        if (savedAnswer == 1) answer2.checked = true;
    } else {
        showQuestion();
    }
};