'use strict';

// Selcting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice funtionality
btnRoll.addEventListener('click', function () {
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. check for rolled 1: if true,
  if (dice !== 1) {
    // add dice value to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //change later
  } else {
    //switch to next player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
btnHold.addEventListener('click', function () {
  score0El.textContent = currentScore;
});
