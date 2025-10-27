let btn = document.getElementById("checkanswer");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let label1 = document.querySelector("label[for='answer1']");
let label2 = document.querySelector("label[for='answer2']");
let pastpage = document.getElementById("pastpage");

function navigatePages() {
    if (window.location.href.includes("index.html")) {
        pastpage.classList.add("disabled");
        setTimeout(function() {
            window.location.href = "second.html"; 
        }, 30000);
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
        pastpage.href = "index.html";
        setTimeout(function() {
            window.location.href = "second.html"; 
        }, 30000);
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
        pastpage.href = "second.html";
        setTimeout(function() {
            window.location.href = "second.html"; 
        }, 30000);        btn.addEventListener("click", checkAnswers);
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
        pastpage.href = "third.html";
        setTimeout(function() {
            window.location.href = "second.html"; 
        }, 30000);        btn.addEventListener("click", checkAnswers);
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