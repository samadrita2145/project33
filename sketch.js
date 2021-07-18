var bg;
 
function preload(){
  bg= loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addAnimation("snowing",bg);
  snow.changeAnimation("snowing");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}