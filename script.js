let score = 0;
let boost = false;

const scoreEl = document.getElementById("score");

const btnIncrement = document.getElementById("btn-count");
const btnMultiply = document.getElementById("btn-multiply");
const btnAutoclick = document.getElementById("btn-autoclick");
const btnBonus = document.getElementById("btn-bonus");

const costMultiplyEl = document.getElementById("cost-multiply");

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
}

btnIncrement.addEventListener("click", () => {
    if (boost){
        score = score + 2;
    } else {
        score++;
    };
    updateScore();
})

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
})

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
})

btnBonus.addEventListener("click", () => {
    boost = true;
    setTimeout(()  => {
        boost = false;
    }, 30000)
})