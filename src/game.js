class Game{
  constructor(playerOne, playerTwo) {
    this.currentTurn = 0;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer;
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
  changeTurn(){
    if(this.currentTurn === 0){
      this.currentTurn += 1;
    }else{
      this.currentTurn -= 1;

    }
  }
  checkTurn(){
    if(this.currentTurn === 0){
      this.currentPlayer  = this.playerOne;
    }else{
      this.currentPlayer  = this.playerTwo;
    }
  }
}
