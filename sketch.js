var bgimg
var sleepimg
var eatimg
var gymimg
var drinkimg
var movimg
var brushimg 
var astronaut
var edges 
var bathimg
function preload(){
  bgimg = loadImage("iss.png")
  sleepimg = loadAnimation("sleep.png")
  brushimg= loadAnimation("brush.png" )
  gymimg = loadAnimation("gym1.png", "gym2.png")
  eatimg = loadAnimation("eat1.png","eat2.png")
  drinkimg= loadAnimation("drink1.png","drink2.png")
  bathimg = loadAnimation("bath1.png","bath2.png")
moveimg = loadAnimation("move.png","move1.png")
}

function setup() {
  createCanvas(1200,800);
astronaut = createSprite  (600,450)
astronaut.addAnimation("sleeping", sleepimg)
astronaut.scale = 0.1
 edges = createEdgeSprites;
  
}

function draw() {
  background(bgimg);  
  drawSprites();
  fill("white")
  text("Up arrow = Brushing",30,70)
  text("Down arrow = Gymming",30,80)
  text("Left arrow = Eating",30,90)
  text("Right arrow = Bathing",30,100)
  text("m key = Moving",30,110)
 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushimg)
    astronaut.changeAnimation("brushing")
    astronaut.y = 500
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymimg)
    astronaut.changeAnimation("gymming")
    astronaut.y = 500
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",moveimg)
    astronaut.changeAnimation("moving")
    
    astronaut.velocityY = 4
    astronaut.velocityX = 4
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eatimg)
    astronaut.changeAnimation("eating")
    astronaut.y = 500
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bathimg)
    astronaut.changeAnimation("bathing")
    astronaut.y = 500
  }




  
}