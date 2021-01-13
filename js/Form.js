class Form{
constructor(){
this.title=createElement("h1")
this.title.html("Car Racing Game")
this.greeting=createElement("h3")

    this.input=createInput("Name")

this.mybutton=createButton("play")

}

show () {
this.input.position(600,100)
this.mybutton.position(800,300)
this.title.position(300,30)

                  this.mybutton.mousePressed(()=> {
                    this.input.hide()
                    this.mybutton.hide()
                    Player. name =this.input.value()
                    proplayerCount=proplayerCount+1
                    player.index=proplayerCount;
                    player.updatePlayer();
                    player .updateplayerCount (proplayerCount) 
                    this.greeting.html("hello"+t) 
                    this.greeting.position(400,500)
                   
                  
               

                  })
                  

                  
}

}