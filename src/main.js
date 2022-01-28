var options = document.querySelectorAll('.options');
var playerScore = document.getElementById('playerScore');
var computerScore = document.getElementById('computerScore');
var ticker = document.getElementById('ticker');
var ticker2 = document.getElementById('ticker2');

var pScore = 0;
var cScore = 0;

options.forEach(function (option) {
  option.addEventListener('click', function () {
    var pInput = this.textContent;
    var cOptions = ['Rock', 'Paper', 'Scissors'];
    var cInput = cOptions[Math.floor(Math.random() * 3)];
    compareInputs(pInput, cInput);
  });
});
function compareInputs(pInput, cInput) {
  var statement = ''.concat(pInput, ' vs ').concat(cInput);
  //If tie
  if (pInput === cInput) {
    ticker.innerText = ''.concat(statement, ' is a tie!');
    ticker2.innerText = '-';
  }
  //If rock vs scissor
  if (pInput == 'Rock' && cInput == 'Scissors') {
    ticker.innerText = ''.concat(statement, ' Rock beats Scissors');
    ticker2.innerText = 'Player wins';
    pScore++;
    playerScore.innerText = ''.concat(pScore);
  } else if (pInput == 'Scissors' && cInput == 'Rock') {
    ticker.innerText = ''.concat(statement, ' Rock beats Scissors');
    ticker2.innerText = 'Computer wins';
    cScore++;
    computerScore.innerText = ''.concat(cScore);
  }
  //If paper vs rock
  if (pInput == 'Paper' && cInput == 'Rock') {
    ticker.innerText = ''.concat(statement, ' Paper beats Rock');
    ticker2.innerText = 'Player wins';
    pScore++;
    playerScore.innerText = ''.concat(pScore);
  } else if (pInput == 'Rock' && cInput == 'Paper') {
    ticker.innerText = ''.concat(statement, ' Paper beats Rock');
    ticker2.innerText = 'Computer wins';
    cScore++;
    computerScore.innerText = ''.concat(cScore);
  }
  //if scissors vs paper
  if (pInput == 'Scissors' && cInput == 'Paper') {
    ticker.innerText = ''.concat(statement, ' Scissors beats Paper');
    ticker2.innerText = 'Player wins';
    pScore++;
    playerScore.innerText = ''.concat(pScore);
  } else if (pInput == 'Paper' && cInput == 'Scissors') {
    ticker.innerText = ''.concat(statement, ' Scissors beats Paper');
    ticker2.innerText = 'Computer wins';
    cScore++;
    computerScore.innerText = ''.concat(cScore);
  }
}
