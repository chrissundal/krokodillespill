let firstNum = 0;
let secondNum = 0;
let seconds = 0;
let krokPoeng = 0;
let aLetter = '';
var myInterval;
const app = document.getElementById('app');
let hScore = '';

updateView();
function updateView() {
    let html = `
        <div class="container">
            <div class="poeng">Poeng:${krokPoeng}</div>
            <div class="main">
                <div>${firstNum}</div>
                <input type="text" oninput="aLetter=this.value" value="${aLetter}"/>
                <div>${secondNum}</div>
            </div>
            <div class="buttons">
                <button onclick="submit()">Submit</button>
                <button onclick="reset()">Reset</button>
            </div>
            <div class="score">
                <button onclick="startTimer()">Start</button>
                <div></div>
                <div>HighScore</div>
                ${hScore}
            </div>
        </div>
            
            `;
    app.innerHTML = html;
}
function startTimer() {
    seconds = 0;
    krokPoeng = 0;
    myInterval = setInterval(countSeconds, 1000);
    updateView();
    updateNumbers();
}
function countSeconds() {
    seconds++;
}
function highScore() {
    hScore = `<li>Ikke dårlig! ${seconds - 1} sekunder</li>`;
    clearInterval(myInterval);
    updateView();
}

function reset() {
    location.reload();
}
function submit() {
    if (firstNum < secondNum && aLetter == "<") {
        correctAnswer();
    } else if (firstNum > secondNum && aLetter == ">") {
        correctAnswer();
    } else if (firstNum == secondNum && aLetter == "=") {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    updateView();
}

function correctAnswer() {
    krokPoeng += 1;
    app.style.backgroundColor = 'green';
    updateNumbers();
    if (krokPoeng == 10) {
        highScore();
    }
    updateView();
}
function wrongAnswer() {
    krokPoeng -= 1;
    app.style.backgroundColor = 'red';
    updateNumbers();
    updateView();
}
function updateNumbers() {
    firstNum = getRandomNumber();
    secondNum = getRandomNumber();
    updateView();
}

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}