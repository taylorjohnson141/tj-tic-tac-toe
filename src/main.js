var gameWrapper = document.querySelector('.wrapper');
var gameBoard =  gameWrapper.querySelectorAll('.game-board');
var game;
var playerOneWins = document.querySelector('.player-one');
var playerTwoWins = document.querySelector('.player-two');

window.addEventListener('load', function () {
  game = initGame();
  if (localStorage.key('currentGame') === undefined || localStorage.key('currentGame') === null || game.retrieveGameFromStorage() === undefined ) {
    playerOneWins.innerText += game.playerOne.retrieveWinsFromStorage();
    playerTwoWins.innerText += game.playerTwo.retrieveWinsFromStorage();
  }
  else {
    game = initGame();
    game.board = game.retrieveGameFromStorage()
    updateHTML();
    playerOneWins.innerText += game.playerOne.retrieveWinsFromStorage();
    playerTwoWins.innerText += game.playerTwo.retrieveWinsFromStorage();
  }
});

gameWrapper.addEventListener('click', function () {
  var location = parseInt(event.target.dataset['id']) - 1;
  if (game.board[location].closed !== true && game.board !== undefined) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    gameBoard[location].classList.add(`${game.currentPlayer.icon}`);
    console.log(game.board[location].icon);
    game.board[location].closed = true;
    [location].disabled = true;
    var result = game.checkWins();

    if(result === 'draw') {
      console.log('draw');
      game.removeGameFromLocalStorage();
      clearHTMLafterTwoSecond();
      game = initGame();


    }
    if (result === true) {
      console.log('WIN');
      game.currentPlayer.addWin();
      game.currentPlayer.saveWinsToStorage()
      game.removeGameFromLocalStorage()
      clearHTMLafterTwoSecond()
      game = initGame();
    }
    if (result === false) {
      console.log('keep goin');
      game.changeTurn();
      if(game.board === initGame().board) {
        return
      }
      game.saveGameToStorage()
    }

  }else {
    console.log('Helo');
    return;
  }

})

function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  return new Game(playerOne, playerTwo);
}
function clearHTML(){
  if(game === undefined){
    return
  }
  gameBoard.forEach(function (spot) {
    spot.classList.remove(`${game.playerOne.icon}`,`${game.playerTwo.icon}`)
  })
}

function updateHTML() {
  if(game.board === undefined){
    return
  }
  game.board.forEach(function (board,i) {
    gameBoard[i].closed = board.closed
    if (board.icon === '') {
      return
    }
    gameBoard[i].classList.add(`${board.icon}`)

  })
}
function clearHTMLafterTwoSecond (){
  window.setTimeout(clearHTML,2000);
}
function disableBoard() {
  gameBoard.forEach(function (spot) {
    spot.disabled = true;
  })
}
