var gameWrapper = document.querySelector('.wrapper');
var gameBoard =  gameWrapper.querySelectorAll('.game-board')
var game;
var playerOneWins = document.querySelector('.player-one');
var playerTwoWins = document.querySelector('.player-two')

window.addEventListener('load', function () {
  game = initGame();
  game.playerOne.retrieveWinsFromStorage();
  playerOneWins.innerText += game.playerOne.retrieveWinsFromStorage();
  playerTwoWins.innerText += game.playerTwo.retrieveWinsFromStorage()
});

gameWrapper.addEventListener('click', function () {
  var children = gameWrapper.children;
  var location = parseInt(event.target.dataset['id']) - 1;
  if (game.board[location].closed !== true) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    gameBoard[location].classList.add(`${game.currentPlayer.icon}`);
    console.log(game.board[location].icon);
    game.board[location].closed = true;
    var result = game.checkWins();

    if(result === 'draw') {
      console.log('draw');
      game = initGame();

    }
    if (result === true) {
      console.log('WIN');
      game.currentPlayer.addWin();
      game.currentPlayer.saveWinsToStorage()
      game = initGame();
    }
    if(result === false) {
      console.log('keep goin');
      game.changeTurn();
    }

  }else {
    console.log('Helo');
    return;
  }

})

function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  if(playerOne.wins >1 || playerTwo.wins>1){
  gameBoard.forEach(function(spot){
    spot.classList = ''
  })
}
  return new Game(playerOne, playerTwo);
}
