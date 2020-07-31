class Player {
constructor(id,token,wins){
this.id = id,
this.token = token,
this.wins = []
}
addWin(win) {
this.wins.push(win)
}
saveWinsToStorage(){
  localStorage.setItem('1',this.wins);
}
retrieveWinsFromStorage(){
  localStorage.getItem('1',this.wins);
}

}
