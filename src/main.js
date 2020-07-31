document.querySelector('wrapper');

game;

window.addEventListener('load', function () {
  game = initGame();
  game.playerOne.retrieveWinsFromStorage()
  game.playerTwo.retrieveWinsFromStorage()

});
wrapper.addEventListener('click',function(){
  if(game.board[event.target.data.id].closed !==true){
    console.log(event.target)
    game.board[event.target.data.id].icon = game.currentPlayer.icon
    game.board[event.target.data.id].closed = true
  }
})

function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  return new Game(playerOne, playerTwo);
}
