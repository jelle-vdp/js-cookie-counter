let score = 0;

const scoreEl = document.getElementById("score");

const btnIncrement = document.getElementById("btn-count");
const btnMultiply = document.getElementById("btn-multiply");
const btnAutoclick = document.getElementById("btn-autoclick");
const btnBonus = document.getElementById("btn-bonus");

const costMultiplyEl = document.getElementById("cost-multiply");

let costMultiply = +costMultiplyEl.innerText;

let boost = false;

const updateScore = () => {
        scoreEl.innerText = score;

    if  (score >= costMultiply){
        btnMultiply.parentElement.classList.remove("buttons-wrapper__button--disabled");
        btnMultiply.disabled = false;
    } else {
        btnMultiply.parentElement.classList.add("buttons-wrapper__button--disabled");
        btnMultiply.disabled = true;
    }
    
    if  (score >= 50){
        btnAutoclick.parentElement.classList.remove("buttons-wrapper__button--disabled");
        btnAutoclick.disabled = false;
    } else {
        btnAutoclick.parentElement.classList.add("buttons-wrapper__button--disabled");
        btnAutoclick.disabled = true;
    }
    
    if  (score >= 100){
        btnBonus.parentElement.classList.remove("buttons-wrapper__button--disabled");
        btnBonus.disabled = false;
    } else {
        btnBonus.parentElement.classList.add("buttons-wrapper__button--disabled");
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