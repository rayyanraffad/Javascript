const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const btns = document.querySelectorAll('.btn');
const img = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

score0.textContent = 0;
score1.textContent = 0;

btns[0].addEventListener('click', function () {
  if (players[1].classList.contains('player--active')) {
    players[1].classList.remove('player--active');
    players[0].classList.add('player--active');
  }
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  players[0].classList.remove('player--winner');
  players[1].classList.remove('player--winner');
});

btns[1].addEventListener('click', function () {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  img.src = `dice-${randomNum}.png`;

  let activeIndex;
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      activeIndex = i;
    }
  }

  const currentPlayer = document.querySelector(`#current--${activeIndex}`);

  if (randomNum !== 1) {
    currentPlayer.textContent = Number(currentPlayer.textContent) + randomNum;
  } else {
    currentPlayer.textContent = 0;
    players[activeIndex].classList.remove('player--active');

    const nextPlayerIndex = activeIndex === 0 ? 1 : 0;
    players[nextPlayerIndex].classList.add('player--active');
  }
});

btns[2].addEventListener('click', function () {
  let activeIndex;
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      activeIndex = i;
    }
  }

  const currentPlayer = document.querySelector(`#current--${activeIndex}`);
  const currentScore = document.querySelector(`#score--${activeIndex}`);

  const totalScore = Number(currentScore.textContent) + Number(currentPlayer.textContent);
  currentScore.textContent = totalScore;
  currentPlayer.textContent = 0;

  if (totalScore >= 100) {
    players[activeIndex].classList.add('player--winner');
    players[activeIndex].classList.remove('player--active');
  } else {
    players[activeIndex].classList.remove('player--active');

    const nextPlayerIndex = activeIndex === 0 ? 1 : 0;
    players[nextPlayerIndex].classList.add('player--active');
  }
});
