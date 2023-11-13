// Homepage
const startButton = document.getElementById('start-btn');
const gameCategories = document.querySelectorAll('input[name="game-type"]');

startButton.addEventListener('click', () => {
  const selectedCategory = document.querySelector('input[name="game-type"]:checked').value;
  if (selectedCategory === 'single-player') {
    window.location.href = 'single-player-games.html';
  } else if (selectedCategory === 'with-computer') {
    window.location.href = 'games-with-computer.html';
  }
});