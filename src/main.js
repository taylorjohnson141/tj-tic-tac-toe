var gameWrapper = document.querySelector('.wrapper');
var gameBoard =  gameWrapper.querySelectorAll('.game-board');
var game;
var overlay = document.querySelector('.overlay');
var playerOneWins = document.querySelector('.player-one');
var playerTwoWins = document.querySelector('.player-two');
var clearWinsButton = document.querySelector('.clear-wins');
var clearBoardButton = document.querySelector('.clear-board');
window.addEventListener('load', function () {
  game = initGame();
  if (localStorage.key('currentGame') === undefined || localStorage.key('currentGame') === null || game.retrieveGameFromStorage() === undefined ) {
    addWinstoPlayers()
  }
  else {
    game = initGame();
    game.board = game.retrieveGameFromStorage()
    updateHTML();
    playerOneWins.innerText += game.playerOne.retrieveWinsFromStorage();
    playerTwoWins.innerText += game.playerTwo.retrieveWinsFromStorage();
  }
});
clearWinsButton.addEventListener('click', clearLocalStorage)
clearBoardButton.addEventListener('click',function(){
  clearHTML()
  game = initGame();

})

gameWrapper.addEventListener('click', function () {
  var location = parseInt(event.target.dataset['id']) - 1;
  console.log(game.board)
  if (game.board[location].closed !== true && game.board !== undefined) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    gameBoard[location].classList.add(`${game.currentPlayer.icon}`);
    console.log(game.board[location].icon);
    game.board[location].closed = true;
    var result = game.checkWins();

    if(result === 'draw') {
      console.log('draw');
      // addOverlay()
      clearHTMLafterTwoSecond();
      game.removeGameFromLocalStorage();
      game = initGame();

    }
    if (result === true) {
      console.log('WIN');
      // addOverlay()
      game.currentPlayer.addWin();
      game.currentPlayer.saveWinsToStorage()
      addWinstoPlayers()
      // turnOffClicks(gameBoard,result);
      clearHTMLafterTwoSecond()
      game.removeGameFromLocalStorage()
      game = initGame();


    }
    if (result === false) {
      console.log('keep goin');
      game.changeTurn();
      if (game.board === initGame().board) {
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
function clearHTML() {
  if (game === undefined){
    return
  }
  gameBoard.forEach(function (spot) {
    spot.classList.remove(`${game.playerOne.icon}`,`${game.playerTwo.icon}`)
  })
}

function updateHTML() {
  if (game.board === undefined) {
    return
  }
  game.board.forEach(function (board, i) {
    gameBoard[i].closed = board.closed
    if (board.icon === '') {
      return
    }
    gameBoard[i].classList.add(`${board.icon}`)

  })
}
function clearHTMLafterTwoSecond() {
  addOverlay()
  window.setTimeout(clearHTML, 2000);
  window.setTimeout(removeOverlay, 2000)
}
function disableBoard() {
  gameBoard.forEach(function (spot) {
    spot.disabled = true;
  });
}
function addOverlay(){
  overlay.classList.remove('hidden')
}
function removeOverlay(){
  overlay.classList.add('hidden')

}
function addWinstoPlayers(){
  game.playerOne.wins = game.playerOne.retrieveWinsFromStorage()
  game.playerTwo.wins = game.playerTwo.retrieveWinsFromStorage()
  if(game.playerOne.wins === null || game.playerOne.wins === undefined  || isNaN(game.playerTwo.wins)){
    game.playerOne.wins = 0
  }
  if(game.playerTwo.wins === null || game.playerTwo.wins === undefined || isNaN(game.playerTwo.wins) ){
    game.playerTwo.wins = 0
  }

  console.log('should be number',typeof playerTwoWinsNumber)
  playerOneWins.innerText = `Player One Wins: ${game.playerOne.wins }`;
  playerTwoWins.innerText =  `Player Two Wins: ${game.playerTwo.wins }`;
}

function clearLocalStorage(){
  localStorage.clear();
  addWinstoPlayers();
}
