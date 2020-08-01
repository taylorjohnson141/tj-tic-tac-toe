class Player {
constructor(id,icon,wins){
this.id = id,
this.icon = icon,
this.wins = wins
}
addWin() {
  this.wins += 1;
}

saveWinsToStorage() {
  localStorage.setItem(id,JSON.stringify(this.wins));
}
retrieveWinsFromStorage(){
  if(localStorage.length !==0){
  var winsInlocal = localStorage.JSON.parse(getItem(id,this.wins));
  this.wins += parseInt(winsInlocal)
}
}

}
