    let score = localStorage.getItem('myValue');
    let correction =  document.getElementById("Correction");
    let correctAnswers = 0;
    for (let i = 0; i < score.length; i++) {
        if (score[i] === '1') {
            correctAnswers = 2.5 + correctAnswers;
            correction.innerHTML += "You got question " + (i + 1) + " correct.<br>";  
        }else {
            correctAnswers = 0 + correctAnswers;
            correction.innerHTML += "You got question " + (i + 1) + " wrong.<br>";  
        }
    }
    let scoreElement = document.getElementById("score");
    scoreElement.innerHTML += "Your score is: " + correctAnswers + " / 10";  