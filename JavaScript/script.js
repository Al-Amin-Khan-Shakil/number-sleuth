const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const documentBody = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscoreNumber = 0;

function guessNumber(guess) {
  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    documentBody.style.backgroundColor = '#60b347';
    checkButton.style.backgroundColor = '#3d3d3d';
    checkButton.disabled = true;
    if (scoreNumber >= highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscore.textContent = highscoreNumber;
    }
  } else if (scoreNumber === 1) {
    message.textContent = '💥 You lost the game!';
    checkButton.style.backgroundColor = '#3d3d3d';
    checkButton.disabled = true;
  } else {
    message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    scoreNumber -= 1;
  }
}
function handleCheckButtonClick() {
  const guessValue = Number(guess.value);
  guessNumber(guessValue);
  score.textContent = scoreNumber;
  guess.value = '';
}

function handleAgainButtonClick() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  message.textContent = 'Start guessing...';
  score.textContent = scoreNumber;
  guess.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  documentBody.style.backgroundColor = '#222';
  checkButton.style.backgroundColor = '#eee';
  checkButton.disabled = false;
}

checkButton.addEventListener('click', handleCheckButtonClick);
againButton.addEventListener('click', handleAgainButtonClick);
