class Game{
    constructor(){
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.display();
        }
    }

    play(){
        player.hide();
        
           background("green");
           image(bg_img, displayWidth/2 - displayWidth/2, displayHeight/2 - displayHeight/2 - 12, displayWidth, displayHeight);
    }
}