// Variables
const arr = document.getElementsByClassName("players");
// console.log(playerButtons);
// console.log(typeof(playerButtons));
let playerButtons=[...arr];
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

// Event listener for player's choice buttons
playerButtons.map(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = generateComputerChoice();
    displayChoices(playerChoice, computerChoice);
    const result = determineResult(playerChoice, computerChoice);
    displayResult(result);
  });
});

// Generate a random choice for the computer
function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Display the player's and computer's choices



// Determine the result of the game
function determineResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Player wins!';
  } else {
    return 'Computer wins!';
  }
}

// Display the game result
function displayResult(result) {
  resultDisplay.textContent = result;
}