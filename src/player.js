class Player {
constructor(id,icon,wins){
this.id = id,
this.icon = icon,
this.wins = wins
}
addWin() {
  this.wins ++;
}

saveWinsToStorage() {
  localStorage.setItem(this.id,this.wins);
}
retrieveWinsFromStorage(){
console.log(localStorage)
  if(localStorage.length !==0 ){
  var winsInlocal = localStorage.getItem(this.id);
  console.log(winsInlocal)
  if(winsInlocal !== undefined){
   this.wins += parseInt(winsInlocal)
   return this.wins
}
}
else {
  return 0
}
}

}
