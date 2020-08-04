class Player {
constructor(id,icon,wins){
this.id = id,
this.icon = icon,
this.wins = this.retrieveWinsFromStorage()
}
addWin() {
  this.wins ++;
}

saveWinsToStorage() {
  localStorage.setItem(this.id,this.wins);
}
retrieveWinsFromStorage(){
  if(localStorage.length !==0 ){
  var winsInlocal = localStorage.getItem(this.id);

  if(winsInlocal !== undefined || winsInlocal !== null ){
   this.wins = parseInt(winsInlocal)
   if(isNaN(parseInt(winsInlocal))){
     return 0
   }
   return this.wins
}
}
else {
  return 0
}
}

}
