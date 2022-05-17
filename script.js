let score = 0;
let boost = false;
let secondsRemaining = 30;

const scoreEl = document.getElementById("score");

const btnIncrement = document.getElementById("btn-count");
const btnMultiply = document.getElementById("btn-multiply");
const btnAutoclick = document.getElementById("btn-autoclick");
const btnBonus = document.getElementById("btn-bonus");

const costMultiplyEl = document.getElementById("cost-multiply");
const secondsRemainingEl = document.querySelector(".bonus-feature span");

let costMultiply = +costMultiplyEl.innerText;

const updateScore = () => {
        scoreEl.innerText = score;

    if  (score >= costMultiply){
        btnMultiply.disabled = false;
    } else {
        btnMultiply.disabled = true;
    }
    
    if  (score >= 50){
        btnAutoclick.disabled = false;
    } else {
        btnAutoclick.disabled = true;
    }
    
    if  (score >= 100){
        btnBonus.disabled = false;
    } else {
        btnBonus.disabled = true;
    }
};

btnIncrement.addEventListener("click", () => {
    if (boost){
        score = score + 2;
    } else {
        score++;
    };
    updateScore();
});

btnMultiply.addEventListener("click", () => {
    score = score - costMultiply;
    if (boost){
        score = score * 2;
    } else {
        score = score * 4;
    };
    costMultiply = costMultiply + 10;
    costMultiplyEl.innerText = costMultiply;
    updateScore();
});

btnAutoclick.addEventListener("click", () => {
    score = score - 50;
    updateScore();
    setInterval(() => {
        if (boost){
            score = score + 2;
        } else {
            score++;
        };
        updateScore();
    }, 3000);
});

btnBonus.addEventListener("click", () => {
    score = score - 100;
    updateScore();
    boost = true;
    secondsRemainingEl.parentElement.style.opacity = "1";
    
    const countdown = setInterval(() => {
        secondsRemaining--;
        secondsRemainingEl.innerText = secondsRemaining;
    }, 1000);

    setTimeout(()  => {
        boost = false;
        clearInterval(countdown);
        secondsRemainingEl.parentElement.style.opacity = "0";
        secondsRemaining = 30;
        secondsRemainingEl.innerText = secondsRemaining;
    }, 30000);
});