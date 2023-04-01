'use strict';
let toGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.guess').value);
  if (!guessed) {
    document.querySelector('.message').textContent =
      'Not valid Number Enter between 1 and 20 !';
  } else if (guessed === toGuess) {
    document.querySelector('.message').textContent = 'Correct Number !!';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').style.color = '#be9200';
    document.querySelector('.number').textContent = toGuess;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    score--;
    document.querySelector('.message').textContent =
      guessed > toGuess ? 'Too High !!' : 'Too Low !!';
  }
  if (score <= 0) {
    score = 0;
    document.querySelector('.message').textContent = 'You Lost !! Game Over !!';
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  toGuess = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = String(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'hsl(192, 100%, 6%)';
  document.querySelector('.number').style.width = '15rem';
});
