class Player{
    constructor(){
    this.button = createButton('Girl');
    this.button1 =createButton('Boy');
    this.button2 = createButton('Play');
    
    this.title = createElement('h1');
    this.title.html("Water Warrior");

    this.boy = loadImage("assets/boy.png");

    this.girl = loadImage("assets/girl.png");
    }

    hide(){
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
        this.title.hide();
    }
    
display(){
   
       this.button.position(displayWidth/2 - 200, 500);

       this.button1.position(displayWidth/2 + 200, 500);
      

       this.button2.position(displayWidth/2, 600);
      
       this.title.position(displayWidth/2 - 100, 50);

       if(gameState === 0){

      image(this.boy, displayWidth/2 + 160, 150, 150,300);

      image(this.girl, displayWidth/2 - 250, 150, 100, 300);
       }

    this.button2.mousePressed(()=>{
      gameState = 1;
      this.button.hide();
      this.button1.hide();
      this.button2.hide();
      this.title.hide();
   })
}
}
