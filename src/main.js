var gameWrapper = document.querySelector('.wrapper');

var game;

window.addEventListener('load', function () {
  game = initGame();
  game.playerOne.retrieveWinsFromStorage()
  game.playerTwo.retrieveWinsFromStorage()

});
gameWrapper.addEventListener('click',function(){
  game.checkTurn()
  var location = parseInt(event.target.dataset['id']) -1
  if(game.board[location].closed !==true){
    game.board[location].icon = game.currentPlayer.icon
    game.board[location].closed = true
  }
  else{
    console.log('closed')
  }
})

function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  return new Game(playerOne, playerTwo);
}
