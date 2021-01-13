

var database;

var proGameState=0;
var proplayerCount=0;
var allPlayer;

function setup(){
  createCanvas(1200,600);
  database = firebase.database();
 game= new Game()
 game.getGameState();
 game.start();
 
 

}

function draw(){
if(proplayerCount===4 ){
game.updateGameState(1);
}
console.log( proplayerCount)
}

