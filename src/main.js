document.querySelector('wrapper');

game;

window.addEventListener('load', function () {
  game = initGame();
  game.playerOne.retrieveWinsFromStorage()
  game.playerTwo.retrieveWinsFromStorage()

});


function initGame() {
  var playerOne = new Player(1, '', 0);
  var playerTwo = new Player(2, '', 0);
  return new Game(playerOne, playerTwo);
}
