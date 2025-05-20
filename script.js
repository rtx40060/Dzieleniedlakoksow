let num1, num2, correct;

function newQuestion() {
    num1 = Math.floor(Math.random() * 10000) + 1;
    num2 = Math.floor(Math.random() * 20 ) + 1;
    correct = Math.round(num1/num2);
    document.getElementById("question").textContent = `${num1} / ${num2}`;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}
function checkAnswer(){
    const userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer == correct){
        document.getElementById("result").textContent = "Good job! Poprawna odpowiedź";
    }else {
        document.getElementById("result").textContent = `Nieeeeeeeee, poprawna odpowiedź to ${correct}`;

    }
}

newQuestion()