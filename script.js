const CHOICES = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

let getRandomInt = (max) => Math.floor(Math.random() * max);
let getComputerChoice = () => CHOICES[getRandomInt(CHOICES.length)];

function refreshScores() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  refreshScores();
}

function announceWinner() {
  if (playerScore > computerScore) {
    alert(`You win! ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    alert(`You lose! ${playerScore} - ${computerScore}`);
  } else {
    alert(`Tie! ${playerScore} - ${computerScore}`);
  }
  resetGame();
  return;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    console.log("Tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    refreshScores();
    console.log(
      `You win this round ! You picked : ${playerChoice} against ${computerChoice}`
    );
  } else {
    computerScore++;
    refreshScores();
    console.log(
      `You lose this round ! You picked : ${playerChoice} - ${playerChoice}`
    );
  }
  roundCount++;
  if (roundCount === 5) {
    announceWinner();
  }
  return;
}

resetButton.addEventListener("click", resetGame);
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});