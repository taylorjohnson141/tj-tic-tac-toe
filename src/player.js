class Player {
constructor(id,icon,wins){
this.id = id,
this.icon = icon,
this.wins = wins
}
addWin(win) {
  this.wins += win;
}
saveWinsToStorage() {
  localStorage.setItem(id,JSON.stringify(this.wins));
}
retrieveWinsFromStorage(){
  if(localStorage.length !==0){
  localStorage.JSON.parse(getItem(id,this.wins));
}
}

}
