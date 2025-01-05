let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  Ties: 0
};

/* 
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    Ties: 0
  }
}
  */

/*
let  score = {
  wins: 0,
  losses: 0,
  Ties: 0
}
  */

let computerMove = '';

function createComputerMove () {
 const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock'
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'Paper'
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'Scissors'
} 
  return computerMove;
}



function playGame (myMove) {
  const computerMove = createComputerMove();
  console.log(computerMove);

  let result = '';
  // condition for rock
  if (myMove === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Ties'
  } else if (computerMove === 'Paper') {
    result = 'You lose'
  } else if (computerMove === 'Scissors') {
    result = 'You win'
  }
  } 
  // conndition for paper
  else if (myMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You win'
  } else if (computerMove === 'Paper') {
    result = 'Ties'
  } else if (computerMove === 'Scissors') {
    result = 'You lose'
  }
  }
  // condition for scissors
  else if (myMove === 'Scissors') {
    if (computerMove === 'Rock') {
    result = 'You lose'
  } else if (computerMove === 'Paper') {
    result = 'You win'
  } else if (computerMove === 'Scissors') {
    result = 'Ties'
  }
  }

  if (result === 'You win') {
    score.wins += 1
  } else if (result === 'You lose') {
    score.losses += 1
  } else if (result === 'Ties') {
    score.Ties += 1
  }


  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;

  updateScoreElement();

  document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${myMove}-emoji.png" class="move-icon" alt="">
    <img src="images/${computerMove}-emoji.png" class="move-icon" alt=""> computer.`;
 
  /* alert(`You chose: ${myMove}. computer chose ${computerMove} result is ${result}.
  wins: ${score.wins}. losses: ${score.losses}. Ties: ${score.Ties}`) */
} 

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}. losses: ${score.losses}. Ties: ${score.Ties}`

}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      const myMove = createComputerMove();
      playGame(myMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-autoplay-button').innerHTML = 'Stop';

    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
      document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
    } 
}


