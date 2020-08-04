var gameWrapper = document.querySelector('.wrapper');
var gameBoard =  gameWrapper.querySelectorAll('.game-board');
var game;
var overlay = document.querySelector('.overlay');
var playerOneWins = document.querySelector('.player-one');
var playerTwoWins = document.querySelector('.player-two');
var clearWinsButton = document.querySelector('.clear-wins');
var clearBoardButton = document.querySelector('.clear-board');
var playerOneWinsPopUp = document.querySelector('.player-one-won');
var playerTwoWinsPopUp = document.querySelector('.player-two-won');
var currentTurn = document.querySelector('.current-turn');
var drawSection = document.querySelector('.draw');

window.addEventListener('load', startGame);
clearWinsButton.addEventListener('click', clearLocalStorage);
clearBoardButton.addEventListener('click', clearCurrentBoard);
gameWrapper.addEventListener('click', onGameClick);



function initGame() {
  var playerOne = new Player(1, 'a', 0);
  var playerTwo = new Player(2, 'b', 0);
  return new Game(playerOne, playerTwo);
}

function clearHTML() {
  if (game === undefined) {
    return;
  }

  gameBoard.forEach(function (spot) {
    spot.classList.remove(`${game.playerOne.icon}`, `${game.playerTwo.icon}`);
  });
}

function updateHTML() {
  if (game.board === undefined) {
    return;
  }

  game.board.forEach(function  (board, i) {
    gameBoard[i].closed = board.closed;
    if (board.icon === '') {
      return;
    }

    gameBoard[i].classList.add(`${board.icon}`)

  });
}

function clearHTMLafterTwoSecond() {
  addOverlay();
  window.setTimeout(clearHTML, 2000);
  window.setTimeout(removeOverlay, 2000);
  window.setTimeout(hideWhoWon, 2000);
}

function disableBoard() {
  gameBoard.forEach(function (spot) {
    spot.disabled = true;
  });
}

function addOverlay() {
  overlay.classList.remove('hidden')
}

function removeOverlay() {
  overlay.classList.add('hidden')
}

function addWinstoPlayers() {
  game.playerOne.wins = game.playerOne.retrieveWinsFromStorage()
  game.playerTwo.wins = game.playerTwo.retrieveWinsFromStorage()
  if (game.playerOne.wins === null || game.playerOne.wins === undefined  || isNaN(game.playerTwo.wins)){
    game.playerOne.wins = 0
  }
  if (game.playerTwo.wins === null || game.playerTwo.wins === undefined || isNaN(game.playerTwo.wins) ){
    game.playerTwo.wins = 0
  }

  playerOneWins.innerText = `Player One Wins: ${game.playerOne.wins }`;
  playerTwoWins.innerText =  `Player Two Wins: ${game.playerTwo.wins }`;
}

function clearLocalStorage() {
  localStorage.clear();
  addWinstoPlayers();
}

function clearBoard() {
  game.board.forEach(function (board, i) {
    board.closed = false;
    board.icon = '';
  });
}

function showWhoWon() {
  if(game.currentPlayer.id == 1){
    playerOneWinsPopUp.classList.remove('hidden');
  }else{
    playerTwoWinsPopUp.classList.remove('hidden');
  }
}

function hideWhoWon() {
  playerOneWinsPopUp.classList.add('hidden');
  playerTwoWinsPopUp.classList.add('hidden');
  drawSection.classList.add('hidden')
}

function displayCurrentTurn() {
  console.log('current turn', game.currentTurn)
  if (game.currentTurn === 0){
    currentTurn.innerText = `Player One's Turn!`
    currentTurn.classList.remove(`${game.playerTwo.icon }`);
    currentTurn.classList.add(`${game.playerOne.icon }`);

  }else {
    currentTurn.innerText = `Player Two's Turn!`
    currentTurn.classList.remove(`${game.playerOne.icon }`);
    currentTurn.classList.add(`${game.playerTwo.icon }`);

  }
}

function showDraw() {
  drawSection.classList.remove('hidden');
}

function onGameClick() {
  var location = parseInt(event.target.dataset['id']) - 1;
  if (game.board[location].closed !== true && game.board !== undefined) {
    game.checkTurn();
    game.board[location].icon = game.currentPlayer.icon;
    gameBoard[location].classList.add(`${game.currentPlayer.icon}`);
    game.board[location].closed = true;
    var result = game.checkWins();
    if (result === 'draw') {
      game.removeGameFromLocalStorage();
      game = initGame();
      showDraw();
      clearHTMLafterTwoSecond();
      clearBoard();
    }

    if (result === true) {
      game.currentPlayer.addWin();
      game.currentPlayer.saveWinsToStorage();
      addWinstoPlayers();
      showWhoWon();
      game.removeGameFromLocalStorage();
      game = initGame();
      displayCurrentTurn();
      clearHTMLafterTwoSecond();
    }else if (result === false) {
      game.changeTurn();
      displayCurrentTurn();
      game.saveGameToStorage();
      if (game.board === initGame().board) {
        return;
      }else {
        return;
      }
    }
  }
}

function clearCurrentBoard (){
  game.removeGameFromLocalStorage();
  game = initGame();
  displayCurrentTurn();
  clearHTML();
}

function startGame(){
  game = initGame();
  displayCurrentTurn();

  if (game.retrieveGameFromStorage() === undefined) {
    addWinstoPlayers();
  }else {
    game.board = game.retrieveGameFromStorage();
    game.currentTurn = game.retrievePlayerFromStorage();
    displayCurrentTurn();
    updateHTML();
    addWinstoPlayers();
  }
}
