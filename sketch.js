var scenery,sceneImage;

var redB,redI;

var blueB,blueI;

var greenB,greenI;

var pinkB,pinkI;

var bow,bowI;

var arrow,arrowI;

function preload(){
 //load your images here 
  
  sceneImage = loadImage("background0.png");
  
  redI = loadImage("red_balloon0.png");
  
  blueI = loadImage("blue_balloon0.png");
  
  greenI = loadImage("green_balloon0.png");
 
  pinkI = loadImage("pink_balloon0.png");
  
  bowI = loadImage("bow0.png");
  
  arrowI = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600,400);
  
  scenery = createSprite(300,200,50,400);
  scenery.x = scenery.width/2;
  scenery.addImage(sceneImage);
  scenery.scale = 4.5;
  //add code here
  
  for(var i = 1;  i <=  7; i = i + 1){
  redB = createSprite(50,i * 50,20,20);
    redB.addImage(redI)
    redB.scale = 0.07
  }
  
  
  for(var i = 2;  i <=  6; i = i + 1){
    blueB = createSprite(90,i * 50,20,20);
    blueB.addImage(blueI)
    blueB.scale = 0.07
  }
  
  
  for(var i = 3;  i <=  5; i = i + 1){
    greenB = createSprite(130,i * 50,20,20);
    greenB.addImage(greenI)
    greenB.scale = 0.06
  }
  
  for(var i = 4;  i <=  4; i = i + 1){
    pinkB = createSprite(170,i * 50,20,20);
    pinkB.addImage(pinkI)
    pinkB.scale = 0.8
  }
  
    bow = createSprite(560,200,15,15);
    bow.addImage(bowI)

  
}

function draw() {
background(255)
  //add code here
  

   bow.y = World.mouseY
  
  scenery.velocityX = -2
  
  
  if(keyWentDown("space")){
   var arrow = createArrow()
   }
  
  if(scenery.x < 0){
    scenery.x = scenery.width/2;
  }
  
  drawSprites()
}


function createArrow(){
  
  arrow = createSprite(bow.x,bow.y,10,15);
  arrow.addImage(arrowI)
  arrow.scale = 0.2;
  arrow.velocityX = -3;
  
  
  
  
  
  
  
  
  
  
}








