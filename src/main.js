var gameWrapper = document.querySelector('.wrapper');

var game;

window.addEventListener('load', function () {
  game = initGame();
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();

});

gameWrapper.addEventListener('click',function(){
  var location = parseInt(event.target.dataset['id']) -1
  if(game.board[location].closed !== true) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    console.log(game.board[location].icon)
    game.board[location].closed = true;
    var result = game.checkWins();

    if(result === 'draw') {
      console.log('draw');
    }
    if (result) {
      console.log('WIN');
      game.currentPlayer.addWin()
      console.log(game.currentPlayer.wins)
    }
    if(result === false) {
      console.log('keep goin');
    }

  }

})

function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  return new Game(playerOne, playerTwo);
}
