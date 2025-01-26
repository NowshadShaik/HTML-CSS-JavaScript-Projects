
let wins = 0;
let loses = 0;
let ties = 0;
let total = 0;

function play(player) {

  let computer = Math.random();

  if(computer >=0 && computer <= 0.33) {
    computer = 'rock';
  } else if(computer > 0.33 && computer <=0.67) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }

  if(player === computer)
    ties++;
  else if(
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  )
    wins++;
  else 
    loses++;

  updateOutput(player, computer);
  updateCounts();
}

function reset() {
  wins = 0;
  loses = 0;
  ties = 0;
  total = 0;

  updateOutput("","");
  updateCounts();
}

function updateOutput(player, computer) {

  let output = document.querySelector('.game-output');
  output.innerHTML = `
            <p>You:</p>
          <img src="./Resources/${player}-emoji.png" />
          <p>Opp:</p>
          <img src="./Resources/${computer}-emoji.png" />
  `;
}

function updateCounts() {

  let winElement = document.getElementById('wins');
  winElement.innerHTML = 'Wins: ' + wins;

  let loseElement = document.getElementById('loses');
  loseElement.innerHTML = 'Loses: ' + loses;

  let tieElement = document.getElementById('tie');
  tieElement.innerHTML = 'Tie: ' + ties;

  let totalElement = document.getElementById('total');
  totalElement.innerHTML = 'Total Score: ' + (wins - loses);
}