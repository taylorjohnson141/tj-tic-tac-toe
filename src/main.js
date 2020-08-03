var gameWrapper = document.querySelector('.wrapper');
var gameBoard =  gameWrapper.querySelectorAll('.game-board');
var game;
var overlay = document.querySelector('.overlay');
var playerOneWins = document.querySelector('.player-one');
var playerTwoWins = document.querySelector('.player-two');
var clearWinsButton = document.querySelector('.clear-wins');
var clearBoardButton = document.querySelector('.clear-board');
var whoWonSection = document.querySelector('.who-won')
window.addEventListener('load', function () {
  game = initGame();
  if (game.retrieveGameFromStorage() === undefined) {
    addWinstoPlayers();

  }
  else {
    game.board = game.retrieveGameFromStorage()
    game.currentTurn = game.retrievePlayerFromStorage()
    updateHTML();
    addWinstoPlayers()
  }
});
clearWinsButton.addEventListener('click', clearLocalStorage)
clearBoardButton.addEventListener('click',function(){
  game.resetBoard()
  game.removeGameFromLocalStorage();
  game = initGame();
  clearHTML()
})

gameWrapper.addEventListener('click', function () {
  var location = parseInt(event.target.dataset['id']) - 1;
  if (game.board[location].closed !== true && game.board !== undefined) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    gameBoard[location].classList.add(`${game.currentPlayer.icon}`);
    game.board[location].closed = true;
    var result = game.checkWins();
    console.log('what we need to know',result)
  if(result === 'draw') {
      console.log('draw');
      game.resetBoard();
      game.removeGameFromLocalStorage();
      game = initGame();
      clearHTMLafterTwoSecond()
      clearBoard()

    }
    if (result === true) {
      console.log('WIN','work' );
      game.currentPlayer.addWin();
      game.currentPlayer.saveWinsToStorage()
      addWinstoPlayers()
      showWhowon()
      game.removeGameFromLocalStorage()
      game = initGame();
      clearHTMLafterTwoSecond()
      clearBoard()
    }else if (result === false) {
      console.log('keep goin');
      game.changeTurn();
      game.saveGameToStorage()
      if (game.board === initGame().board) {
        console.log('broken')
        return
      } else {
      console.log('not broken')
      return
    }
    }

  }else {

    game.board[location].closed = false;

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
  window.setTimeout(removeOverlay, 2000);
  window.setTimeout(hideWhowon,2000)
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

  playerOneWins.innerText = `Player One Wins: ${game.playerOne.wins }`;
  playerTwoWins.innerText =  `Player Two Wins: ${game.playerTwo.wins }`;
}

function clearLocalStorage(){
  localStorage.clear();
  addWinstoPlayers();
}
function clearBoard(){
  game.board.forEach(function (board, i) {
    board.closed = false;
    board.icon = '';
  })
}
function showWhowon(){
  whoWonSection.classList.remove('hidden')
  if(game.currentPlayer.id === 1){
    whoWonSection.innerText = `Player One Won! `
  }else{
    whoWonSection.innerText = `Player Two Won! `

  }
  whoWonSection.classList.add(`${game.currentPlayer.icon}`)
}
function hideWhowon(){
  whoWonSection.classList.add('hidden')
  whoWonSection.remove(`${game.currentPlayer.icon}`)
}
