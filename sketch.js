const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var gameState = 0;

var player;
var home,home2,home3,home4,home5,home6,home7;
var home8,home9,home10;
var game;


function preload(){
 bg0_img = loadImage("assets/background2.png")
 bg_img = loadImage("assets/background.png");

 girlU_img = loadImage("assets/girlUp.png");
 girlD_img  = loadImage("assets/girlDown.png");
 girlR_img = loadImage("assets/girlRight.png");
 girlL_img = loadImage("assets/girlLeft.png");

 boyU_img = loadImage("assets/boyUp.png");
 boyD_img = loadImage("assets/boyDown.png");
 boyR_img = loadImage("assets/boyRight.png");
 boyL_img = loadImage("assets/boyLeft.png");

 leaking_img = loadImage("assets/drainSymbol.png")
}


function water(){

  var Leak  = createSprite(0,0,100,100);
  Leak.addImage("leak",leaking_img);
 var rand = Math.round(random(1,10))

switch(rand){
  case 1: Leak.position.x = 420;
         Leak.position.y = 530;
        break;
  
  case 2: Leak.position.x = 680;
          Leak.position.y = 530;
          break;

  case 3: Leak.position.x = 680;
          Leak.position.y = 800;
          break;
          
 case 4: Leak.position.x = 120;
         Leak.position.y = 530;
         break;

case 5: Leak.position.x = 1200;
        Leak.position.y = 75;
        break;

case 6: Leak.position.x = 1200
        Leak.position.y = 260
        break;

case 7: Leak.position.x = 926;
        Leak.position.y = 75;
        break;

case 8: Leak.postion.x = 926;
        Leak.position.y = 260;
        break;

case 9: Leak.position.x = 65;
        Leak.position.y = 65;
        break;

case 10: Leak.position.x = 1255;
         Leak.position.y = 800;
         break;
}
}

function setup() {
  createCanvas(displayWidth-10, displayHeight-30);    
  engine = Engine.create();
  world = engine.world;                                               
 
  
  home = new House2(420,530);
  home2 = new House1(680,530);
  home3 = new House3(680,800);
  home4 = new House4(120,530);
  home5 = new House3(1200,75);
  home6 = new House2(1200,260);
  home7 = new House4(926,75);
  home8 = new House1(926,260);
  home9 = new House2(65,65);
  home10 = new House4(1255,800);
  
  

  game = new Game();
  player = new Player();
  game.start();
}

function draw() {
   
  console.log(gameState);
background(bg0_img);

if(gameState === 1){
  game.play();

   home.display();
  home2.display();
  home3.display();
  home4.display();
  home5.display();
  home6.display();
  home7.display();
  home8.display();
  home9.display();
  home10.display();

  drawSprites();
}

Engine.update(engine);

  player.display();
  
  
}
