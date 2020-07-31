class Player {
constructor(id,token,wins){
this.id = id,
this.token = token,
this.wins = wins
}
addWin(win) {
  this.wins += win;
}
saveWinsToStorage() {
  localStorage.setItem('1',JSON.stringify(this.wins);
}
retrieveWinsFromStorage(){
  localStorage.JSON.parse(getItem('1',this.wins));
}

}
