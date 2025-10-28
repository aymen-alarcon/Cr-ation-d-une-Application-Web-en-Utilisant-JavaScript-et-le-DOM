let btn = document.getElementById("checkanswer");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let label1 = document.querySelector("label[for='answer1']");
let label2 = document.querySelector("label[for='answer2']");
let pastpage = document.getElementById("pastpage");
let questionElement = document.querySelector(".question");
let questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "What is the largest planet in our solar system?",
    "Who wrote 'Romeo and Juliet'?"
];
let answers = [
    ["Paris", "London"],
    ["4", "22"],
    ["Jupiter", "Mars"],
    ["William Shakespeare", "Charles Dickens"]
];

let currentQuestionIndex = 0;

function navigatePages() {
    if (window.location.href.includes("index.html")) {
            currentQuestionIndex = 0;
            if (currentQuestionIndex < questions.length) {
                questionElement.textContent = questions[currentQuestionIndex];
                label1.textContent = answers[currentQuestionIndex][0];
                label2.textContent = answers[currentQuestionIndex][1];
                currentQuestionIndex++;
            }
        pastpage.classList.add("disabled");
        setTimeout(function() {
            let value = localStorage.getItem('myValue');
            value = "0";
            localStorage.setItem('myValue', value);
            window.location.href = "second.html?answer=" + value; 
        }, 3000);
        btn.addEventListener("click", checkAnswers);
        function checkAnswers() {
            if (answer1.checked) {
                let value  = "1";
                localStorage.setItem('myValue', value);
                window.location.href = "second.html?answer=" + value; 
            } else if (answer2.checked) {
                let value = "0";
                localStorage.setItem('myValue', value);
                window.location.href = "second.html?answer=" + value; 
            } else {
                alert("Please select an answer.");
            }
        }
    }else if (window.location.href.includes("second.html")) {
            currentQuestionIndex = 1;
            if (currentQuestionIndex < questions.length) {
                questionElement.textContent = questions[currentQuestionIndex];
                label1.textContent = answers[currentQuestionIndex][0];
                label2.textContent = answers[currentQuestionIndex][1];
                currentQuestionIndex++;
            }
        pastpage.href = "index.html";
        setTimeout(function() {
            let value = localStorage.getItem('myValue');
            value = value + "0";
            localStorage.setItem('myValue', value);
            window.location.href = "third.html?answer=" + value; 
        }, 3000);
        btn.addEventListener("click", checkAnswers);
        function checkAnswers() {
            if (answer1.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "1";
                localStorage.setItem('myValue', value);
                window.location.href = "third.html?answer=" + value; 
            } else if (answer2.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "0";
                localStorage.setItem('myValue', value);
                window.location.href = "third.html?answer=" + value; 
            } else {
                alert("Please select an answer.");
            }
        }
    } else if (window.location.href.includes("third.html")) {
            currentQuestionIndex = 2;
            if (currentQuestionIndex < questions.length) {
                questionElement.textContent = questions[currentQuestionIndex];
                label1.textContent = answers[currentQuestionIndex][0];
                label2.textContent = answers[currentQuestionIndex][1];
                currentQuestionIndex++;
            }
        pastpage.href = "second.html";
        setTimeout(function() {
            let value = localStorage.getItem('myValue');
            value = value + "0";
            localStorage.setItem('myValue', value);
            window.location.href = "forth.html?answer=" + value; 
        }, 3000);        
        btn.addEventListener("click", checkAnswers);
        function checkAnswers() {
            if (answer1.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "1";
                localStorage.setItem('myValue', value);
                window.location.href = "forth.html?answer=" + value; 
            } else if (answer2.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "0";
                localStorage.setItem('myValue', value);
                window.location.href = "forth.html?answer=" + value; 
            } else {
                alert("Please select an answer.");
            }
        }
    } else if (window.location.href.includes("forth.html")) {
            currentQuestionIndex = 3;
            if (currentQuestionIndex < questions.length) {
                questionElement.textContent = questions[currentQuestionIndex];
                label1.textContent = answers[currentQuestionIndex][0];
                label2.textContent = answers[currentQuestionIndex][1];
                currentQuestionIndex++;
            }
        pastpage.href = "third.html";
        setTimeout(function() {
            let value = localStorage.getItem('myValue');
            value = value + "0";
            localStorage.setItem('myValue', value);
            window.location.href = "resultat.html?answer=" + value; 
        }, 3000);        btn.addEventListener("click", checkAnswers);
        function checkAnswers() {
            if (answer1.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "1";
                localStorage.setItem('myValue', value);
                window.location.href = "resultat.html?answer=" + value; 
            } else if (answer2.checked) {
                let value = localStorage.getItem('myValue');
                value = value + "0";
                localStorage.setItem('myValue', value);
                window.location.href = "resultat.html?answer=" + value; 
            } else {
                alert("Please select an answer.");
            }
        }
    }
}
window.onload = navigatePages;