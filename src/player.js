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
    localStorage.setItem(id,JSON.stringify(this.wins);
}
retrieveWinsFromStorage(){
  if(this.localStorage.length !==0){
  localStorage.JSON.parse(getItem(id,this.wins));
}
}

}
