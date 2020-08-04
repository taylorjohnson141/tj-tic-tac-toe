
class Game{
  constructor(playerOne, playerTwo) {
    this.currentTurn = 0;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer;
    this.winPatterns = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [1, 4, 7],
     [2, 5, 8],
     [3, 6, 9],
     [1, 5, 9],
     [3, 5, 7],
   ];
    this.board  = [
      {
        id: 1,
        icon: '',
        closed: false,
      },
      {
        id: 2,
        icon: '',
        closed: false,
      },
      {
        id: 3,
        icon: '',
        closed: false,
      },
      {
        id: 4,
        icon: '',
        closed: false,
      },
      {
        id: 5,
        icon: '',
        closed: false,
      },
      {
        id: 6,
        icon: '',
        closed: false,
      },
      {
        id: 7,
        icon: '',
        closed: false,
      },
      {
        id: 8,
        icon: '',
        closed: false,
      },
      {
      id: 9,
      icon: '',
      closed: false,
    },
  ];

  }
  changeTurn() {
    if (this.currentTurn === 0) {
      this.currentTurn += 1;
    }else {
      this.currentTurn -= 1;

    }
  }

  checkTurn() {
    if (this.currentTurn === 0) {
      this.currentPlayer  = this.playerOne;
    }else {
      this.currentPlayer  = this.playerTwo;
    }
  }

  checkWins() {
    var closed = this.board.filter(function (board) {
      if (board.closed) {
        return board;
      }
    });

    var currentPlayerSpots = [];
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i].icon === this.currentPlayer.icon) {
        currentPlayerSpots.push(this.board[i].id);
      }
    }


    for (var i = 0; i < this.winPatterns.length; i++) {
      if (currentPlayerSpots.includes(this.winPatterns[i][0]) && currentPlayerSpots.includes(this.winPatterns[i][1])  && currentPlayerSpots.includes(this.winPatterns[i][2])) {
        return true;
      }
      }
    if (closed.length === 9) {
      return 'draw';
    }
else{
  return false;

}
  }
  saveGameToStorage() {
    localStorage.setItem('currentGame',JSON.stringify(this))
  }
  retrieveGameFromStorage() {
    if(localStorage.getItem('currentGame') === null ){
      return undefined
    }
    var game = localStorage.getItem('currentGame')
     game =  JSON.parse(game)
     return game.board
  }

  retrievePlayerFromStorage(){
    if(localStorage.getItem('currentGame')!== null){
    var game = localStorage.getItem('currentGame')
     game =  JSON.parse(game)
     return game.currentTurn
  }
}
  removeGameFromLocalStorage() {
    localStorage.removeItem('currentGame')

  }
  resetBoard () {
    return [
      {
        id: 1,
        icon: '',
        closed: false,
      },
      {
        id: 2,
        icon: '',
        closed: false,
      },
      {
        id: 3,
        icon: '',
        closed: false,
      },
      {
        id: 4,
        icon: '',
        closed: false,
      },
      {
        id: 5,
        icon: '',
        closed: false,
      },
      {
        id: 6,
        icon: '',
        closed: false,
      },
      {
        id: 7,
        icon: '',
        closed: false,
      },
      {
        id: 8,
        icon: '',
        closed: false,
      },
      {
      id: 9,
      icon: '',
      closed: false,
    },
  ];
  }

}
