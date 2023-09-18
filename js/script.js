'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const onCheck = function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess || guess <= 0 || guess > 20) {
        displayMessage("Enter a valid number! 😒");
    }
    else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        displayMessage("🎉 Congrats! You Won!");
        document.querySelector('.check').disabled = 'true';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('.highscore').textContent = highScore;
    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage("📈 Too High!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage("☹️ You Lost");
            document.querySelector('body').style.backgroundColor = "red";
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            displayMessage("📉 Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage("☹️ You Lost");
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
};

document.querySelector('.check').addEventListener('click', onCheck);
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.getElementsByTagName("body")[0].style.background = "#222";
})
document.querySelector('.guess').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        onCheck();
    }
});
