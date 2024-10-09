'use strict';

// Selcting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let player1 = currentScore;

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
    current0El.textContent = currentScore; //change later
  } else {
    //switch to next player
    current0El.textContent = 0;
    console.log('next player');
  }
});
btnHold.addEventListener('click', function () {
  score0El.textContent = currentScore;
});
