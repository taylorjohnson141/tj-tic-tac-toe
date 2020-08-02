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

  if(winsInlocal !== undefined ||winsInlocal !== null ){
    console.log('wins in local',parseInt(winsInlocal))
   this.wins = parseInt(winsInlocal)
   if(isNaN(parseInt(winsInlocal))){
     return 0
   }
   console.log('all wins',this.wins)
   return this.wins
}
}
else {
  return 0
}
}

}
