class Player{

    constructor(){
      this.index=null;
this.distance=null;
this.name=null;
this.rank=null
    }
    
    getplayerCount (){
        var  databaseAgent  = database.ref('playerCount');
        databaseAgent .on("value",function(data){
         proplayerCount = data.val();
        })

       
      }
    
      
       updateplayerCount (m){
    
        database.ref('/').update({
    
        playerCount : m
        });
      }

      updatePlayer(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
                  
        });
      }

}
