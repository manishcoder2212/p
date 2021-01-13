class Game{

constructor(){
}

getGameState (){
    var  databaseAgent  = database.ref('gameState');
    databaseAgent .on("value",function(data){
     proGameState = data.val();
    })
   
  }

  
   updateGameState (m){

    database.ref('/').update({

     gameState : m
    });

  }
 

  async start(){
    if(proGameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        proplayerCount = playerCountRef.val();
        player.getplayerCount ();
      }
      form = new Form()
      form.show();
    }
  }

    
}